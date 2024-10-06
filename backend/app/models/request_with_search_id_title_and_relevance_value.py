from pydantic import BaseModel


class RequestWithSearchIdTitleRelevanceValue(BaseModel):
    title: str
    relevance_value: str
    relevance_type: str
    uid: str
    search_query: str
