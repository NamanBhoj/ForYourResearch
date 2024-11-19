from pydantic import BaseModel


class RequestForHtml(BaseModel):
    title: str
    search_query: str
    uid: str
