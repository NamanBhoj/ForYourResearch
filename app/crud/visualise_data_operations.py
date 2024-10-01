

from sqlalchemy.orm import Session
from sqlalchemy import and_


def visualise_reranked_title(db:Session, uid:str, query:str, title_rerankedscore:list):