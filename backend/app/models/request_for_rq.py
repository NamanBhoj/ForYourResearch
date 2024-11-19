from .request_with_list import RequestObjectWithListData
from typing import List


class RequestObjectForRQ(RequestObjectWithListData):
    researchQuestions: List[str]
