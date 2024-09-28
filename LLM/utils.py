from pinecone import Index, Pinecone, ServerlessSpec
from openai import OpenAI
import uuid
import json

pc = Pinecone(api_key="5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e")
openai_client = OpenAI(
    api_key="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"
)


# Generate embeddings for a list of titles/abstracts using the OpenAI embedding model
def generate_embeddings(texts: list):
    response = openai_client.embeddings.create(
        input=texts, model="text-embedding-3-small"
    )

    embeddings = [embedding_object.embedding for embedding_object in response.data]
    return embeddings


# Generate embeddings for the text that will be used to query the database
def generate_embedding_for_query(text: str):
    response = openai_client.embeddings.create(
        input=text, model="text-embedding-3-small"
    )
    return response.data[0].embedding


# Create a list of records where each record contains the embeddings of a paper, metadata and id
def generate_records(paper_titles: list, user_id: str, search_query: str):
    records = []
    # Generate embeddings for all paper titles in batch otherwise making one request for each paper_title will us down
    embeddings = generate_embeddings(paper_titles)

    for paper_title, embedding in zip(paper_titles, embeddings):
        records.append(
            {
                # Pinecone does not autogenerate ids so we need to specify a unique id for each paper
                "id": str(uuid.uuid4()),
                "values": embedding,
                "metadata": {
                    "user_id": user_id,
                    "search_query": search_query,
                    "paper_title": paper_title,
                },
            }
        )
    return records


def get_titles():
    with open("./papers.json", "r", encoding="utf-8") as file:
        papers = json.load(file)
    paper_titles = [paper["title"] for paper in papers]
    return paper_titles
