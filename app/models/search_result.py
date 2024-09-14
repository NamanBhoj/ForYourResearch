from pydantic import BaseModel
from typing import Optional

"""
We use the SearchResultBase class to store attributes that we need during BOTH read and write operations to database.
The read operation means reading data from database and writing means adding a row to the database. The SearchResultCreate
class will be used when adding a row to the database because we will need the search_id (foriegn key and it comes from
the Search class) to make a reference to the Search table. But because we don't need the search_id when we are fetching
data from the database, the SearchResult class that is used when reading data from database, does not have that field. 
"""


class SearchResultBase(BaseModel):
    title: Optional[str] = None
    abstract: Optional[str] = None
    year: Optional[int] = None
    url: Optional[str] = None
    paperId: Optional[str] = None

    # Relevance that is manually set by the user
    manual_overall_relevance: Optional[str] = None
    manual_title_relevance: Optional[str] = None
    manual_abstract_relevance: Optional[str] = None
    manual_full_text_relevance: Optional[str] = None

    # Relevance that will be determined by the LLM
    ai_overall_relevance: Optional[str] = None
    ai_title_relevance: Optional[str] = None
    ai_abstract_relevance: Optional[str] = None
    ai_full_text_relevance: Optional[str] = None


class SearchResultCreate(SearchResultBase):
    search_id: int


class SearchResult(SearchResultBase):
    search_result_id: int

    class Config:
        orm_mode = True
