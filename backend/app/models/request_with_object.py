from pydantic import BaseModel


class Request(BaseModel):
    uid: str
    data: list
    searchQuery: str
