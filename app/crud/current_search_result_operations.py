from sqlalchemy.orm import Session
from ..schemas.current_search_result import (
    CurrentSearchResult as CurrentSearchResultSchema,
)


def save_current_search_results(db: Session, papers: list, uid: str):
    if not papers:
        return

    row = CurrentSearchResultSchema(uid=uid, papers=papers)
    # Replace the old data with the new data
    db.merge(row)
    db.commit()


def get_current_search_results(db: Session, uid: str):
    return convert_to_list(
        (
            db.query(CurrentSearchResultSchema.papers)
            .filter(CurrentSearchResultSchema.uid == uid)
            .all()
        )
    )


def convert_to_list(papers):
    if not papers:
        return
    papers_list = []
    for (paper,) in papers:
        papers_list.append(paper)
    return papers_list[0]
