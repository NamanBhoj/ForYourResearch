from .request_with_object import Request
from typing import List


class RequestObjectWithListData(Request):
    data: List[dict]
