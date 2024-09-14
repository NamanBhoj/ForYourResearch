from sqlalchemy import create_engine, and_
from sqlalchemy.orm import sessionmaker
from ..schemas.search import Search as SearchSchema 
from ..schemas.search_result import SearchResult as SearchResultSchema# Import your model

# Set up the database connection
engine = create_engine("postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require")
 
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = Session()

# Example query



# def update_manual_paper_relevance(db:Session, search_id :int, title: str, relevance_value:str):
#     #functions gets a specific query for a specific user by using search id and then helps change the manual relevance

#     #search id maps: user and searchquery
#     #title : maps to specific paper
#     #manualrelevancevalue : relevance value send from frontend

#     paper = db.query(SearchResultSchema).filter(and_(SearchResultSchema.search_id == search_id , SearchResultSchema.title == title)).first()
#     paper.manual_overall_relevance = relevance_value
#     db.commit()
#     db.refresh(paper)
#     print(paper.manual_overall_relevance)




(update_manual_paper_relevance(session, 31, "Passive Haptic Feedback for Control Elements in Virtual Reality", "Relevant"))

# i = 0 
# for r in result:
#     i+=1
#     print(f"SEARCH_ID : {r.search_id}, title: {r.title} ,  abstract: {r.abstract} , year {r.year}")

# print(i)



