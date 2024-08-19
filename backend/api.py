from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import firebase_admin
from firebase_admin import credentials, auth, firestore
from pydantic import BaseModel


class RequestObject(BaseModel):
    uid: str
    data: dict
    searchQuery: str


cred = credentials.Certificate(
    "for-your-research-68124-firebase-adminsdk-bwf0n-77eed70bd8.json"
)
firebase_admin.initialize_app(cred)
db = firestore.client()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/saveToLibrary/")
async def saveToLibrary(request: RequestObject):
    print(request)
    users_collection = db.collection("Users").document(request.uid)
    user_data = {"userId": request.uid}
    users_collection.set(user_data)

    library_collection = (
        db.collection("Users").document(request.uid).collection("Library")
    )

    library_collection.add({"data": request.data, "searchQuery": request.searchQuery})


@app.get("/fetchUserLibrary/")
async def fetchUserLibrary(uid: str):
    library_collection = db.collection("Users").document(uid).collection("Library")
    documents = library_collection.stream()
    jsonDocs = [document.to_dict() for document in documents]
    return jsonDocs


@app.get("/search/")
async def search(query: str):

    # Define the API endpoint URL
    url = "https://api.semanticscholar.org/graph/v1/paper/search"

    # More specific query parameter
    query_params = {
        "query": query,
        "limit": 10,
        "fields": "title,abstract,year,openAccessPdf,isOpenAccess",
    }

    # Directly define the API key (Reminder: Securely handle API keys in production environments)
    api_key = "Gvkbt2QFvx2QZwQBigWqJTzOa5TPS6v1kAdrpaBf"

    # Define headers with API key
    headers = {"x-api-key": api_key}

    # Send the API request
    response = requests.get(url, params=query_params, headers=headers)
    response_data = response.json()

    paperArray = response_data.get("data", [])
    paperCount = response_data.get("total", 0)

    responseObject = {"papersArray": paperArray, "paperCount": paperCount}
    return responseObject


# async def fetchUser(uid:str):
#     app.
