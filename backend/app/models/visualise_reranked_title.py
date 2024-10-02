from pydantic import BaseModel
from typing import Optional


class VisualiseRerankedTitleBase(BaseModel):
    title: Optional[str] = None
    score: Optional[float] = None
    query: Optional[str] = None




class VisualiseRerankedTitleCreate(VisualiseRerankedTitleBase):
    uid: int


class SearchResult(VisualiseRerankedTitleBase):
    uid: int

    class Config:
        orm_mode = True
