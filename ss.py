from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from ..models.request_with_list import RequestObjectWithListData
from ..dependencies import get_db
from ..crud import current_search_result_operations
from ..util.helper_functions import parse_query
from fastapi import Depends
import requests
import time
from ..util.helper_functions import parse_query, filter_papers
