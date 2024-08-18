from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import requests

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/search/")
async def search(query: str):

    # Define the API endpoint URL
    url = "https://api.semanticscholar.org/graph/v1/paper/search"

    # More specific query parameter
    query_params = {
        "query": query,
        "limit": 100,
        "fields": "title,abstract,year,openAccessPdf",
    }

    # Directly define the API key (Reminder: Securely handle API keys in production environments)
    api_key = (
        "Gvkbt2QFvx2QZwQBigWqJTzOa5TPS6v1kAdrpaBf"  # Replace with the actual API key
    )

    # Define headers with API key
    headers = {"x-api-key": api_key}

    # Send the API request
    response = requests.get(url, params=query_params, headers=headers)
    
    paperObject = response.json()
    return paperObject
