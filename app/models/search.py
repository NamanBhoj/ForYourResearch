from pydantic import BaseModel

"""
We need to use pydantic models to store data to database and read data from it. However, there are some fields 
(or columns) that we don't necessarily need to read from the database so we use the SearchCreate model when
creating a row in the database and the Search model when reading data from the databaes
"""


class SearchBase(BaseModel):
    uid: str
    search_query: str


class SearchCreate(SearchBase):
    pass


class Search(SearchBase):
    search_id: int

    class Config:
        orm_mode = True
