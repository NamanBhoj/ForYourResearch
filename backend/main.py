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
    response = requests.get(
        f"https://api.semanticscholar.org/graph/v1/paper/search?query={query}&limit=10"
    )
    paperObject = response.json()
    print(
        f"https://api.semanticscholar.org/graph/v1/paper/search?query={query}&limit=10"
    )
    return paperObject
