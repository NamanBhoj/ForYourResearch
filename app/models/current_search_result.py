from pydantic import BaseModel
from typing import Optional


class CurrentSearchResultBase(BaseModel):
    uid: str
    papers: Optional[dict] = None


class CurrentSearchResultCreate(CurrentSearchResultBase):
    pass


class CurrentSearchResult(CurrentSearchResultBase):

    class Config:
        orm_mode = True
