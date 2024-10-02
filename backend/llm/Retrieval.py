# from pinecone import Index, Pinecone, ServerlessSpec
# from openai import OpenAI
# import uuid
# import json

# pc = Pinecone(api_key="5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e")
# openai_client = OpenAI(
#     api_key="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"
# )


# def get_docs_for_reranking(query: str, top_k: int, index_name: str) -> list[str]:

#     index = pc.Index(index_name)
#     #change the query to vector essentially using the same model should return the same query vecytor
#     query_vector = openai_client.embeddings.create(
#         input=query, model="text-embedding-3-large"
#     )
#     query_vector = query_vector.data[0].embedding
#     # search pinecone index
#     response = index.query(vector=query_vector, top_k=top_k, include_metadata=True, include_values=True)
#     # get doc text
#     # print(response)
#     result = response['matches']
#     # print(result, len(result))
#     # print(result[0]['id'], result[0]['metadata']['search_query'] , result[0]['metadata']['paper_title'])


#     return result

# results = (get_docs_for_reranking("virtual reality", 5000, "test-large"))
