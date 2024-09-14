from sqlalchemy.orm import Session
from ..models.search import SearchCreate
from ..models.search_result import SearchResult, SearchResultCreate

from ..schemas.search import Search as SearchSchema
from ..schemas.search_result import SearchResult as SearchResultSchema


def save_query(db: Session, search_create: SearchCreate):

    row = SearchSchema(uid=search_create.uid, search_query=search_create.search_query)
    #fetch query
    #give unique name
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



def retrieve_all_queries(db:Session, uid : int):

    return(db.query(SearchSchema).filter(SearchSchema.uid == uid).all())



def find_search_id(db:Session, uid: str , search_query: str): 
    "method to find search id for retreive_papers_by_query method"

    response = (db.query(SearchSchema.search_id).filter(and_(SearchSchema.uid == uid, SearchSchema.search_query == search_query)).all())
    # print(respone)
    search_id = response[0][0]
    return search_id

def retrieve_papers_by_query(db:Session,search_id : int) : 
    #instead of using composite key of (uid+ searchQuery) we create a new field search_id which maps to user uid + searchQuery

    return (db.query(SearchResultSchema).filter(SearchResultSchema.search_id == search_id).all())


def update_manual_paper_relevance(db:Session, search_id :int, title: str, relevance_value:str):
    #functions gets a specific query for a specific user by using search id and then helps change the manual relevance

    #search id maps: user and searchquery
    #title : maps to specific paper
    #manualrelevancevalue : relevance value send from frontend

    paper = db.query(SearchResultSchema).filter(and_(SearchResultSchema.search_id == search_id , SearchResultSchema.title == title)).first()
    paper.manual_overall_relevance = relevance_value
    db.commit()
    # db.refresh(paper)
    # print(paper.manual_overall_relevance)






