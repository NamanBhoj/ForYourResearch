from fastapi import APIRouter, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from ..models.current_search_result import CurrentSearchResult
from ..models.request_with_list import RequestObjectWithListData
from ..dependencies import get_db
from ..crud import current_search_result_operations, library_operations
from fastapi import Depends

router = APIRouter()


@router.post("/saveCurrentSearchResults")
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
