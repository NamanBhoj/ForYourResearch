from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import firebase_admin
from firebase_admin import credentials, auth, firestore
from pydantic import BaseModel
from mangum import Mangum
import time, json


class RequestObject(BaseModel):
    uid: str
    data: dict
    searchQuery: str


cred = credentials.Certificate(
    {
        "type": "service_account",
        "project_id": "for-your-research-68124",
        "private_key_id": "77eed70bd86bd60e187c99d0ffa9f797e9c85e98",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQKsWmsUND6HIq\nPYVwc+btQb0e9002Av/O0WjkrP2dkbQva9saUWkCuO3Q9H2+gvhlyE56gEt4UByw\nT0iktbNMksC9jtjJ0YbLaM+L59vO53t7XpunZ8pG4R4XuVtxhyeIm4HU7oRDxVFM\nLUkriw6x8Y+7rAELORwVzwf+Rp8ZMyrN/EMeqDGqNb9JXIptJHpJf098dHD22EBN\nlou6P/OJE1veT1ZWWQW39j7G7WWaoInz+xjrbsjgxv/sKq/Y4K+Sn7jIBWCR4hCm\n9WBgaXH9IBsqRuq4G4JBgms4NZVRlHrURlgSEYj0dw0kXpzf9q85ZF0L8OJwI29r\nRyVabkIBAgMBAAECggEALtMcNB+GC7Gu8oD1seKkVISXy64hrE9W5tj0gRHHl6jF\ncPBQL/aVijL6baj9Wvv/b3ez7XrL3yOYHHGtG72yd/w/xjPqYFVU/o7UNrqAF2W7\nATh6B1lBpxluyTPc1afq9N/T/8dqMYtiOuIp5hVIyC6X4AV0E6f0QRSZjfEpSwOv\nVwlahBXAIvcwvon7Jb4fEKtLXHyEccnh0DBOyMYoYBesQJTBB9O4+CkMjCSRLhyj\nyTiW5oqJweJCWnXXljUyIluP1+95uRFxxN16AUXfC8CcCBHS39D5KE0PAC7oz/ie\nh9Gfl5IRvj9vWZG7DcyBsaqa4dSH2ZVUsVVQmrd+FQKBgQDohQoR+PaeTJDrSyCU\nrXP0igLx2lMkkLsBN1G7PVIkVa80Dn+9GVeOUUpMkmLCUF3xs9XBbNNDLmO+qmzG\npkNOhaKeynXLPfzGVz5LPRrcebfh4QIn2J7Bfo2WsB+3TAHx4pGFAXiBA11pPxpJ\nN5Hg8s7Ngw6J8JJ2oBDtVAUmLQKBgQDlMC8CiNnoaQjNhTn7O4Gak88ultlOVqlt\nyC+5a7CxVywcT7EBzvfgG/f7eaRNkfUTheSOn7Y60mWLBbJcqTi3sPyGZCbM9BYk\nhdBGEM07AXmD2Mob0CSgiyOx4OqmCpVlWZoyIBbnoKRcER0fKBYu1H23gLuFjBId\niEV9GcajpQKBgQCwqGN+RCkbHBD+s5WNYDs5D6ItHjMNFOj/g4gVOgGumWsDogBr\nK1XaSuioRI/EEktN19QPoR7ha91cfx8lzixU/DMRccENKYtjJeWuRD6kQ9XxR4Lb\nwzjaycvJMQbnvFe97uWgp/1mB6hwzgCqoA21WsTEX04sfxrIBdTWe39uAQKBgCxJ\ne0wKFdGLOmA8dk/N1+V+2nIuRB+XL3Y/ULmLzcD3D1cJLzMiQ1PTE8BMaSt0IN98\n6AWHZzdGoMiUeTremE8mrCVsBPNl10GHeg+P/5h/WHPZ2HQ3bFx5hpRA2hbrxKKp\nBdrZyJNJv3jq9a2nmWHDPefPwGy1/GoogwUBjhjhAoGATMA1GU332nPX8kVU7xfd\nN3QVmEcmSJ/BpFIakZLJ3Wz2h1N7G58CxQWjFDTe+BJ442FKOlFqS1IYhJoCr/fl\niTGKvySnObYH3BMNdMX45IhMgBJ/q/qYvaBVkDMOLNwReqeQPHzL5o07eDe2wY5k\nsO3j2flODxJpeTEI9zFTKUA=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-bwf0n@for-your-research-68124.iam.gserviceaccount.com",
        "client_id": "100167829327251489282",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bwf0n%40for-your-research-68124.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com",
    }
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
handler = Mangum(app)


@app.post("/saveToLibrary/")
async def saveToLibrary(request: RequestObject):
    print(request)
    users_collection = db.collection("Users").document(request.uid)
    user_data = {"userId": request.uid}
    users_collection.set(user_data)

    # modify the incoming search query so we always
    # store it with a number
    baseSearchQuery = request.searchQuery + " ⦿ "
    library_collection = (
        db.collection("Users").document(request.uid).collection("Library")
    )
    library_stream = library_collection.stream()

    storedSearchQueries = []
    for doc in library_stream:
        docJson = doc.to_dict()
        storedSearchQuery = docJson["searchQuery"]
        storedSearchQueries.append(storedSearchQuery)

    max_number = 0
    for searchQuery in storedSearchQueries:
        if searchQuery.startswith(baseSearchQuery):
            numberPart = searchQuery.split(" ⦿ ")[1]
            number = int(numberPart)
            if number > max_number:
                max_number = number

    new_number = max_number + 1
    uniqueSearchQuery = f"{baseSearchQuery}{new_number}"

    library_collection.add({"data": request.data, "searchQuery": uniqueSearchQuery})


@app.get("/fetchUserLibrary/")
async def fetchUserLibrary(uid: str):
    library_collection = db.collection("Users").document(uid).collection("Library")
    documents = library_collection.stream()
    jsonDocs = [document.to_dict() for document in documents]
    return jsonDocs


@app.get("/search/")
async def search(query: str):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"

    api_key = "Gvkbt2QFvx2QZwQBigWqJTzOa5TPS6v1kAdrpaBf"
    headers = {"x-api-key": api_key}

    total_papers = []
    total_offset = 0
    limit = 100

    while total_offset < 200:
        query_params = {
            "query": query,
            "limit": limit,
            "fields": "title,abstract,year,openAccessPdf,isOpenAccess",
            "offset": total_offset,
        }
        time.sleep(2)
        response = requests.get(url, params=query_params, headers=headers)
        response_data = response.json()

        papers = response_data.get("data", [])
        total_papers.extend(papers)

        total_offset += limit

        # if returned array has less than 100 papers, it means that there wont be anymore papers in the next array because
        # the maximum limit is 100
        if len(papers) < limit:
            break

    paper_count = len(total_papers)

    response_object = {"papersArray": total_papers, "paperCount": paper_count}

    return response_object


@app.post("/saveCurrentSearchData/")
async def saveCurrentSearchData(request: RequestObject):
    users = db.collection("Users")
    users.document(request.uid).update(
        {"currentSearchData": request.data, "currentSearchQuery": request.searchQuery}
    )


@app.get("/getCurrentSearchData/")
async def getCurrentSearchData(uid: str):
    users = db.collection("Users")
    user_ref = users.document(uid)
    doc_snapshot = user_ref.get()
    response = {}
    if doc_snapshot.exists:
        response["searchData"] = doc_snapshot.get("currentSearchData")
        response["searchQuery"] = doc_snapshot.get("currentSearchQuery")
        return response
    return "no"
