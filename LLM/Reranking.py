from pinecone.grpc import PineconeGRPC
from Retrieval import get_docs_for_reranking

api_key = "5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e"
embed_model = "text-embedding-3-large"

pc = PineconeGRPC(api_key=api_key)

#only pass top 2000 for reranking
results = get_docs_for_reranking("virtual reality", 2000, "test-large")

SearchQuery = results[0]['metadata']['search_query']
PaperTitle = [i['metadata']['paper_title'] for i in results]

def Rerank(query: str, docs: list):
    rerank_name = "bge-reranker-v2-m3"
    reranked_docs = []
    #because can only rerank 100 at a time, need to chunk and form a limit ideal for now is 2000
    for i in range(0, len(docs), 100):
        chunk = docs[i:i + 100]
        reranked_chunk = pc.inference.rerank(
            model=rerank_name,
            query=query,
            documents=chunk,
            parameters={
                "truncate": "END",  # truncate to max length
            },
            return_documents=True
        )
        reranked_docs.extend(reranked_chunk.data)

    return reranked_docs

reranked_docs = Rerank(SearchQuery, PaperTitle)

reranked_docs.sort(key=lambda x: x['score'], reverse=True)
print(reranked_docs, len(reranked_docs))
# print(reranked_docs, len(reranked_docs))
