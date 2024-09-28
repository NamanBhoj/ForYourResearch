from pinecone import Index, Pinecone, ServerlessSpec
from openai import OpenAI
import uuid
import json

pc = Pinecone(api_key="5c5b2cd2-523f-447a-89b7-ae3e92dc4f6e")
openai_client = OpenAI(api_key="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")

"""
1. First create the embedding for a paper title. The embedding will look something like [0.019134955, -0.06451289, -0.0016912875, 0.07806957]
2. Then create a record (a row in SQL terms) for that paper title. The record will be a JSON object storing the id and metadata for that paper.
The metadata will contain information like user_id, paper_title and search_query. This will be useful when querying the database to get relevance
of all papers that are stored in one search and also to exactly know which papers are relevant.
3. Create an embedding for the search query
4. Query pinecone with the embedding of the search query and get the top k relevant papers
"""

# Create an index in the database by passing in the name of the index
def create_index(index_name: str):
    if index_name not in pc.list_indexes().names():
        print("Creating index:", index_name)
        pc.create_index(name=index_name, dimension=1536, metric="cosine", spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        ))

def upsert_records(records: list, index_name: str):
    index = pc.Index(index_name)
    index.upsert(records)

# Generate embeddings for a piece of text using OpenAI's model
def generate_embeddings(texts: list):
    response = openai_client.embeddings.create(
        input=texts,
        model="text-embedding-3-small"
    )

    embeddings = [embedding_object.embedding for embedding_object in response.data]
    return embeddings

def generate_embedding_for_query(text: str):
    response = openai_client.embeddings.create(
        input=text,
        model="text-embedding-3-small"
    )
    # print(response.data.embedding_object)
    return response.data[0].embedding

def generate_records(paper_titles: list, user_id: str, search_query: str):
    records = []
    # Generate embeddings for all paper titles in batch otherwise making one request for each paper_title will us down
    embeddings = generate_embeddings(paper_titles)
    
    for paper_title, embedding in zip(paper_titles, embeddings):
        records.append({
            "id": str(uuid.uuid4()),
            "values": embedding,
            "metadata": {
                "user_id": user_id,
                "search_query": search_query,
                "paper_title": paper_title
            }
        })
    return records

# Functions to test with JSON

def get_titles():
    with open("./papers.json", 'r', encoding='utf-8') as file:
        papers = json.load(file)
    paper_titles = [paper["title"] for paper in papers]
    return paper_titles

def query_database(embedding_for_query: str, index_name: str, user_id: str, search_query: str):
    index = pc.Index(index_name)

    matches = index.query(
        vector=embedding_for_query,
        top_k = 20,
        include_metadata=True,
        filter = {
            "user_id": user_id,
            "search_query": search_query
        }
    )

    return matches

# paper_titles = get_titles()


# records = generate_records(paper_titles=paper_titles, user_id="1234", search_query="virtual reality")

# # # Slicing the records array and upserting it in chunks to stay under the maximum upsert limit set by Pinecone. 
# slice_size = max(1, len(records) // 3)

# upsert_records(records[:slice_size], "test")            
# upsert_records(records[slice_size:2 * slice_size], "test")
# upsert_records(records[2 * slice_size:], "test")

embedding_for_query = generate_embedding_for_query("virtual reality")
print(query_database(embedding_for_query, "test", "1234", "virtual reality"))
