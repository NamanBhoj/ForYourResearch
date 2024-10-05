from pinecone.grpc import PineconeGRPC

# from .Retrieval import get_docs_for_reranking

# from backend import app
# from app import crud
# import backend.app.crud.visualise_data_operations
from backend.app.crud import visualise_data_operations

api_key = "5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e"
embed_model = "text-embedding-3-large"

pc = PineconeGRPC(api_key=api_key)

# only pass top 2000 for reranking
# results = get_docs_for_reranking("virtual reality", 2000, "test-large")

# SearchQuery = results[0]["metadata"]["search_query"]
# PaperTitle = [i["metadata"]["paper_title"] for i in results]


def rerank(query: str, docs: list):
    """Rerank the documents based on the query; this function uses the re-ranker by pinecone"""
    rerank_name = "bge-reranker-v2-m3"
    reranked_docs = []
    #assuming that adding does this abstract gives more context information to cross encoder
    query = "Does this abstract has contextual information about these keywords " + query + "?"
    # because can only rerank 100 at a time, need to chunk and form a limit ideal for now is 2000
    for i in range(0, len(docs), 100):
        chunk = docs[i : i + 100]
        reranked_chunk = pc.inference.rerank(
            model=rerank_name,
            query=query,
            documents=chunk,
            parameters={
                "truncate": "END",  # truncate to max length
            },
            return_documents=True,
        )
        reranked_docs.extend(reranked_chunk.data)

    reranked_docs.sort(key=lambda x: x["score"], reverse=True)
    return reranked_docs


# reranked_docs, query = rerank(SearchQuery, PaperTitle)
# print(reranked_docs[0])


# now these go to abstract -index
def save_titles_to_visualize_reranked_title_table(
    reranked_docs: list, search_query: str
):
    """helper function to visualise data in the database"""
    most_relevant_titles = []
    for reranked_title in reranked_docs:
        if reranked_title["score"] > 0.90:
            most_relevant_titles.append(
                {"title": reranked_title.document.text, "score": reranked_title.score}
            )
    visualise_data_operations.save_to_visualise_reranked_title_table(
        uid="123", query=search_query, reranked_titles=most_relevant_titles
    )


# save_titles_to_visualize_reranked_title_table(
#     reranked_docs=reranked_docs, search_query=query
# )
