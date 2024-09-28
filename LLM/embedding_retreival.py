from pinecone import Index, Pinecone, ServerlessSpec
from openai import OpenAI
import uuid
import json

pc = Pinecone(api_key="5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e")
openai_client = OpenAI(
    api_key="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"
)
"""
Terminology:

- Index: a table in pinecone database
- Record: a row in the table
- Upsert: operation to add a record in the table if it doesn't already exist
- Metadata: extra information you can add with each vector to filter/identify the vector
"""
"""
1. First create the embedding for a paper title. The embedding will look something like [0.019134955, -0.06451289, -0.0016912875, 0.07806957]
2. Then create a record (a row in SQL terms) for that paper title. The record will be a JSON object storing the id and metadata for that paper.
The metadata will contain information like user_id, paper_title and search_query. This will be useful when querying the database to get relevance
of all papers that are stored in one search and also to exactly know which papers are relevant.
3. Create an embedding for the search query
4. Query pinecone with the embedding of the search query and get the top k relevant papers
"""

"""
Things to research:
- which metric to use for searching (cosine, dot product etc)
- which OpenAI embedding model to use
"""


def query_database(
    embedding_for_query: str, index_name: str, user_id: str, search_query: str
):
    index = pc.Index(index_name)

    matches = index.query(
        vector=embedding_for_query,
        top_k=20,
        include_metadata=True,
        # Only return the records that are related to the specified search_query, for the user
        filter={"user_id": user_id, "search_query": search_query},
    )

    return matches
