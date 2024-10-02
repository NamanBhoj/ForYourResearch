from pydantic import BaseModel


class RequestWithUidAndQuery(BaseModel):
    uid: str
    search_query: str
