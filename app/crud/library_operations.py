from sqlalchemy.orm import Session
from ..models.search import SearchCreate
from ..models.search_result import SearchResult, SearchResultCreate

from ..schemas.search import Search as SearchSchema
from ..schemas.search_result import SearchResult as SearchResultSchema


def save_query(db: Session, search_create: SearchCreate):
    row = SearchSchema(uid=search_create.uid, search_query=search_create.search_query)
    db.add(row)
    db.commit()
    db.refresh(row)
    return row


def save_papers(db: Session, papers: list, search_id: int):
    papers_to_add = []
    for paper in papers:
        row = SearchResultSchema(
            search_id=search_id,
            title=paper["title"],
            year=paper["year"],
            abstract=paper["abstract"],
            manual_overall_relevance=paper["Relevance"],
            paperId=paper["paperId"],
            url=paper["openAccessPdf"]["url"] if paper.get("openAccessPdf") else None,
        )
        papers_to_add.append(row)
    db.add_all(papers_to_add)
    db.commit()
