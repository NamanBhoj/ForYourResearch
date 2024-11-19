from pydantic import BaseModel


class RequestForMd(BaseModel):
    title: str
    search_query: str
