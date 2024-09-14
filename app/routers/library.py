from fastapi import APIRouter
from ..util import helper_functions
from ..models.search import SearchCreate, Search
from ..models.request_with_list import RequestObjectWithListData
from fastapi import Depends
from sqlalchemy.orm import Session
from ..dependencies import get_db
from ..crud import library_operations


router = APIRouter()
suffix = ""

if not (helper_functions.is_in_production()):
    suffix = "/"





"""GET METHODS"""

@router.get()













"""POST METHODS"""

@router.post(f"/saveQuery{suffix}", response_model=SearchCreate)
def save_query(request_model: SearchCreate, db: Session = Depends(get_db)):
    return library_operations.save_query(search_create=request_model, db=db)


"""
to be implemented after i come to the lab.

currently it accepts the paper array but only stores the uid and 
search query to the Search table. need to add functionality
to store a row in the search_result table. row_ref.search_id is
the primary key of the row created in Search table.
"""


@router.post(f"/saveToLibrary/", response_model=Search)
def save_to_library(
    request_model: RequestObjectWithListData, db: Session = Depends(get_db)
):
    """
    To-do: Before saving the query to database, we need to check if
    the query already exists with the user's uid so we can add
    a number next to the query like we do in firebase.
    """
    search_row = SearchCreate(
        uid=request_model.uid, search_query=request_model.searchQuery, db=db
    )
    row_ref = library_operations.save_query(search_create=search_row, db=db)

    library_operations.save_papers(
        papers=request_model.data, db=db, search_id=row_ref.search_id
    )
    return row_ref


