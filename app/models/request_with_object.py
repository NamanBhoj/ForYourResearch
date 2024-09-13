from pydantic import BaseModel


class Request(BaseModel):
    uid: str
    data: dict
    searchQuery: str
