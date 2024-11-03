from ..util.helper_functions import parse_query
from fastapi import Depends
import requests
import time, json
from ..util.helper_functions import parse_query


def search(query: str):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"

    parsed_query = parse_query(query)
    print(parsed_query)
    api_key = "Gvkbt2QFvx2QZwQBigWqJTzOa5TPS6v1kAdrpaBf"
    headers = {"x-api-key": api_key}

    total_papers = []
    total_offset = 0
    limit = 100

    query_params = {
        "query": parsed_query,
        "limit": limit,
        "fields": "title,abstract,year,openAccessPdf,isOpenAccess",
        "offset": total_offset,
        "publicationTypes": "Review,JournalArticle",
    }

    time.sleep(2)
    response = requests.get(url, params=query_params, headers=headers)

    print(response.url)
    response_data = response.json()
    with open("semanticscholar.json", "w") as f:
        json.dump(response_data, f)


query = '("pointing" OR "pointer" OR "cue" OR "selection") AND ("virtual reality" OR "augmented reality" OR "mixed reality" OR "extended reality")'
search(query)
