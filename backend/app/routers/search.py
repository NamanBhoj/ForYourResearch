from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from ..models.request_with_list import RequestObjectWithListData
from ..dependencies import get_db
from ..crud import current_search_result_operations
from ..util.helper_functions import parse_query
from fastapi import Depends
import requests
import time
from ..util.helper_functions import parse_query, filter_papers

router = APIRouter()


@router.get(f"/search")
async def search(query: str):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"

    parsed_query = parse_query(query)
    print(parsed_query)
    api_key = "Gvkbt2QFvx2QZwQBigWqJTzOa5TPS6v1kAdrpaBf"
    headers = {"x-api-key": api_key}

    total_papers = []
    total_offset = 0
    limit = 100
#FAST API Request
    while total_offset < 1000:
        query_params = {
            "query": parsed_query,
            "limit": limit,
            "fields": "title,abstract,year,openAccessPdf,isOpenAccess",
            "offset": total_offset,
        }

        time.sleep(2)
        response = requests.get(url, params=query_params, headers=headers)

        print(response.url)
        response_data = response.json()
        number_of_papers = response_data["total"]

        papers = response_data.get("data", [])
        total_papers.extend(papers)

        total_offset += limit

        # if returned array has less than 100 papers, it means that there wont be anymore papers in the next array because
        # the maximum limit is 100
        if len(papers) < limit:
            break

    #Google Scholar Request
    for paper in total_papers:
        paper["Relevance"] = "Untagged"

    # total_papers is the list containing all the papers
    total_papers = filter_papers(total_papers)
    response_object = {
        "papers": total_papers,
        "number_of_papers": number_of_papers,
    }

    return response_object


@router.post(f"/saveCurrentSearchResults")
def save_current_search_results(
    request_model: RequestObjectWithListData, db: Session = Depends(get_db)
):
    try:
        current_search_result_operations.save_current_search_results(
            db=db, papers=request_model.data, uid=request_model.uid
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get(f"/getCurrentSearchResults")
def get_current_search_results(uid: str, db: Session = Depends(get_db)):
    results = current_search_result_operations.get_current_search_results(
        db=db, uid=uid
    )
    return results
