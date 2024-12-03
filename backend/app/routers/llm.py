from http.client import HTTPException
from fastapi import APIRouter
from ..models.request_with_list import RequestObjectWithListData
from ..models.request_for_rq import RequestObjectForRQ
from ..models.request_for_md import RequestForMd
from ..models.request_for_html import RequestForHtml


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
from ...llm.full_text_reranking import get_rq_answers
from ...llm.test import screen_papers
from ..crud.full_text_operations import (
    upload_papers_to_s3,
    read_pdfs_from_s3,
)
from ...llm.title_reranking import screen_titles
from ..pdf_parsing.convert_pdf_to_docx import convert_pdf_to_docx
from ..pdf_parsing.split_merged_docx import split_merged_docx_with_formatting
from ..pdf_parsing.read_from_md import process_md_files
from ..pdf_parsing.extract_heading_content import convert_folder_docx_to_md
from ...llm.temp_full_text_reranking import filter_relevant_abstracts
from ..pdf_parsing.html_to_text import process_html_files

router = APIRouter()


import time


@router.post(f"/screenTitlesAndAbstracts")
def screen_titles_and_abstracts(
    request: RequestObjectWithListData, db: Session = Depends(get_db)
):
    # pc = Pinecone(api_key="5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e")

    # create_index(pc=pc, index_name="title-index")
    # time.sleep(2)  # Delay after creating the index
    # create_index(pc=pc, index_name="abstract-index")
    # time.sleep(2)  # Delay after creating the second index

    # Title screening
    # title_records_to_upsert = generate_records(
    #     pc=pc,
    #     texts=paper_titles,
    #     user_id=request.uid,
    #     search_query=request.searchQuery,
    # )

    # for i in range(0, len(title_records_to_upsert), 100):
    #     upsert_records(
    #         pc=pc,
    #         records=title_records_to_upsert[i : i + 100],
    #         index_name="title-index",
    #     )
    # time.sleep(1)  # Delay between each batch of upsert records

    # time.sleep(5)  # Delay to allow the data to propagate before retrieving records

    # embedding_of_query, keywords = generate_embedding_for_query(
    #     pc=pc, text=request.searchQuery
    # )
    # time.sleep(2)  # Delay after generating the embedding

    # top_k_titles = retrieve_top_k_records(
    #     pc=pc,
    #     embedding_for_query=embedding_of_query,
    #     index_name="title-index",
    #     user_id=request.uid,
    #     search_query=request.searchQuery,
    #     # get top 70% papers
    #     top_k=int(0.7 * len(title_records_to_upsert)),
    # )
    # time.sleep(2)  # Delay after retrieving top_k titles

    # title_texts = top_k_titles["matches"]
    # title_texts = [record["metadata"]["text"] for record in title_texts]
    # titles_set = set(title_texts)

    paper_titles = [paper["title"] for paper in request.data]
    titles_set = screen_titles(paper_titles, request.searchQuery)
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

    screened_abstracts = filter_relevant_abstracts(
        request.searchQuery, relevant_abstracts
    )
    # time.sleep(2)  # Delay after filtering abstracts
    reranked_abstracts_set = set(screened_abstracts)
    print(len(reranked_abstracts_set))
    for paper in papers:
        if paper["abstract"] in reranked_abstracts_set:
            paper["abstract_relevance"] = "Relevant"
        else:
            paper["abstract_relevance"] = "Irrelevant"

    return papers


@router.post(f"/screenForResearchQuestions")
def screenForResearchQuestions(request: RequestObjectForRQ):
    papers_with_links = []
    for paper in request.data:
        if (
            paper["isOpenAccess"]
            and paper["openAccessPdf"]
            and paper["openAccessPdf"]["url"] is not None
        ):
            papers_with_links.append(
                {"title": paper["title"], "link": paper["openAccessPdf"]["url"]}
            )

    # MERGED_PDF_PATH = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/merged_pdfs/{request.uid}/{request.searchQuery}"
    # MERGED_DOCX_PATH = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/merged_docxs/{request.uid}/{request.searchQuery}"
    # SPLIT_DOCXS_PATH = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_docxs/{request.uid}/{request.searchQuery}"
    # SPLIT_MDS_PATH = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds/{request.uid}/{request.searchQuery}"
    HTML_PATH = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/html_files/{request.uid}/{request.searchQuery}"
    upload_papers_to_s3(request.uid, request.searchQuery, request.data)

    paper_titles = read_pdfs_from_s3(request.uid, request.searchQuery, HTML_PATH)

    # convert_pdf_to_docx(
    #     f"{request.uid} - {request.searchQuery}",
    #     f"{MERGED_PDF_PATH}/{request.uid} - {request.searchQuery}.pdf",
    #     MERGED_DOCX_PATH,
    # )

    # split_merged_docx_with_formatting(
    #     f"{MERGED_DOCX_PATH}/{request.uid} - {request.searchQuery}.docx",
    #     SPLIT_DOCXS_PATH,
    #     paper_titles,
    # )

    # convert_folder_docx_to_md(SPLIT_DOCXS_PATH, SPLIT_MDS_PATH)
    # papers = process_md_files(SPLIT_MDS_PATH)
    papers = process_html_files(HTML_PATH, paper_titles)
    titles = [paper["title"] for paper in papers]

    # response = document_relevance(queries=request.researchQuestions, documents=papers)
    # print(new_response)
    print(titles)
    # new_response = get_rq_answers(
    #     paper_titles=titles, queries=request.researchQuestions, documents=papers
    # )
    new_response = screen_papers(
        research_questions=request.researchQuestions,
        papers=papers,
    )
    print(new_response)
    return new_response

    """
    response format:
    [
        {'What is the future work that can be done in virtual reality?': ['output_pdf_2.md', 'output_pdf_3.md']}, 
        {'How are virtual reality techniques used in medicine?': ['output_pdf_2.md', 'output_pdf_3.md', 'output_pdf_1.md']},
        {'What are the dangers of virtual reality?': ['output_pdf_4.md']}
    ]
    """


import os


@router.post(f"/getMarkdown")
def getMarkdown(request: RequestForMd):
    folder_path = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds/2eYbiBc5shN2ynLx857epU9BOH13/{request.search_query}"
    title = request.title
    title.replace(".pdf", "")
    # Construct the file path by joining folder path with title and adding .md extension
    file_path = os.path.join(folder_path, f"{title}.md")
    print(title)
    # Check if the file exists
    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="Markdown file not found")

    # Read the file content and return it as a string
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        return content
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error reading markdown file")


@router.post(f"/getMarkdown")
def getMarkdown(request: RequestForMd):
    folder_path = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds/2eYbiBc5shN2ynLx857epU9BOH13/{request.search_query}"
    title = request.title
    title.replace(".pdf", "")
    # Construct the file path by joining folder path with title and adding .md extension
    file_path = os.path.join(folder_path, f"{title}.md")
    print(title)
    # Check if the file exists
    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="Markdown file not found")

    # Read the file content and return it as a string
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        return content
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error reading markdown file")


@router.post("/getHtml")
def get_html(request: RequestForHtml):
    folder_path = f"/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/html_files/{request.uid}/{request.search_query}"
    title = request.title
    title = title.replace(".pdf", "").replace(
        ".html", ""
    )  # Ensure ".pdf" is removed from the title
    # Construct the file path by joining folder path with title and adding .html extension
    file_path = os.path.join(folder_path, f"{title}.html")
    print(title)

    # Check if the file exists
    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="HTML file not found")

    # Read the file content and return it as a string
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        return content
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error reading HTML file: {str(e)}"
        )
