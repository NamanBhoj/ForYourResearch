from fastapi import APIRouter
from ..models.request_with_list import RequestObjectWithListData

from pinecone import Pinecone
import time

from fastapi import Depends
from sqlalchemy.orm import Session
from ..dependencies import get_db
from ...llm.embeddings import (
    generate_records,
    retrieve_top_k_records,
    generate_embedding_for_query,
)
from ...llm.ingestion_and_indexing import upsert_records, create_index
from ...llm.reranking import rerank

router = APIRouter()


@router.post(f"/screenTitlesAndAbstracts")
def screen_titles_and_abstracts(
    request: RequestObjectWithListData, db: Session = Depends(get_db)
):
    pc = Pinecone(api_key="5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e")

    paper_titles = [paper["title"] for paper in request.data]
    create_index(pc=pc, index_name="title-index")
    create_index(pc=pc, index_name="abstract-index")

    # Title screening
    title_records_to_upsert = generate_records(
        pc=pc,
        texts=paper_titles,
        user_id=request.uid,
        search_query=request.searchQuery,
    )

    for i in range(0, len(title_records_to_upsert), 100):
        upsert_records(
            pc=pc,
            records=title_records_to_upsert[i : i + 100],
            index_name="title-index",
        )
    # upsert_records(pc=pc, records=title_records_to_upsert, index_name="title-index")
    time.sleep(5)
    embedding_of_query = generate_embedding_for_query(pc=pc, text=request.searchQuery)

    top_k_titles = retrieve_top_k_records(
        pc=pc,
        embedding_for_query=embedding_of_query,
        index_name="title-index",
        user_id=request.uid,
        search_query=request.searchQuery,
        top_k=700,
    )

    title_records_to_rerank = top_k_titles["matches"]
    title_records_to_rerank = [
        record["metadata"]["text"] for record in title_records_to_rerank
    ]

    reranked_titles = rerank(request.searchQuery, docs=title_records_to_rerank)

    titles_set = set()
    # print(reranked_titles)
    for record in reranked_titles:
        """
        Set the threshold here for title screening
        """
        # if record["score"] > 0.4:
        titles_set.add(record["document"]["text"])

    papers = request.data
    relevant_abstracts = []

    # Filter papers based on title relevance
    for paper in papers:
        if paper["title"] in titles_set:
            paper["title_relevance"] = "Relevant"
            if paper["abstract"] and len(paper["abstract"]) > 0:
                relevant_abstracts.append(paper["abstract"])

        else:
            paper["title_relevance"] = "Irrelevant"

    # Abstract screening
    if len(relevant_abstracts) > 0:
        abstract_records_to_upsert = generate_records(
            pc=pc,
            texts=relevant_abstracts,
            user_id=request.uid,
            search_query=request.searchQuery,
        )
        for i in range(0, len(abstract_records_to_upsert), 100):
            upsert_records(
                pc=pc,
                records=abstract_records_to_upsert[i : i + 100],
                index_name="abstract-index",
            )

        time.sleep(5)
        top_k_abstracts = retrieve_top_k_records(
            pc=pc,
            embedding_for_query=embedding_of_query,
            index_name="abstract-index",
            user_id=request.uid,
            search_query=request.searchQuery,
            top_k=300,
        )
        abstract_records_to_rerank = top_k_abstracts["matches"]
        abstract_records_to_rerank = [
            record["metadata"]["text"] for record in abstract_records_to_rerank
        ]
        print(abstract_records_to_rerank)
        reranked_abstracts = rerank(
            request.searchQuery, docs=abstract_records_to_rerank
        )
        # print(reranked_abstracts)
        abstracts_set = set()
        for record in reranked_abstracts:
            """
            Set the threshold here for abstract screening
            """
            if record["score"] > 0.4:
                abstracts_set.add(record["document"]["text"])

        for paper in papers:
            if paper["abstract"] in abstracts_set:
                paper["abstract_relevance"] = "Relevant"
            else:
                paper["abstract_relevance"] = "Irrelevant"

    return papers
