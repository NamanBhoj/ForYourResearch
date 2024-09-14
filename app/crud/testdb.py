# from sqlalchemy import create_engine, and_
# from sqlalchemy.orm import sessionmaker
# from ..schemas.search import Search as SearchSchema 
# from ..schemas.search_result import SearchResult as SearchResultSchema# Import your model

# # Set up the database connection
# engine = create_engine("postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require")
 
# Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# session = Session()

# # Example query



# def find_search_id(db:Session, uid: str , search_query: str): 
#     "method to find search id for retreive_papers_by_query method"

#     response = (db.query(SearchSchema.search_id).filter(and_(SearchSchema.uid == uid, SearchSchema.search_query == search_query)).all())
#     # print(respone)
#     a = response[0][0]
#     return a

# result = (find_search_id(session, "kvCvOJoraSbKkAobm8KD8VUnR1k1", '("virtual reality" OR "mixed reality" OR "augmented reality" OR "extended reality") AND "digital twin"'))
# print(result)
# # i = 0 
# # for r in result:
# #     i+=1
# #     print(f"SEARCH_ID : {r.search_id}, title: {r.title} ,  abstract: {r.abstract} , year {r.year}")

# # print(i)



