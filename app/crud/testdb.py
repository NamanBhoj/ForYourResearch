# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker
# from ..schemas.search import Search as SearchSchema 
# from ..schemas.search_result import SearchResult as SearchResultSchema# Import your model

# # Set up the database connection
# engine = create_engine("postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require")
 
# Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# session = Session()

# # Example query



# def retrieve_papers_by_query(db:Session,search_id : int) : 
#     #instead of using composite key of (uid+ searchQuery) we create a new field search_id which maps to user uid + searchQuery

#     return (db.query(SearchResultSchema.title, SearchResultSchema.abstract , SearchResultSchema.fullText, SearchResultSchema.year,
#     SearchResultSchema.url, SearchResultSchema.manual_overall_relevance,
#     SearchResultSchema.manual_title_relevance, SearchResultSchema.manual_abstract_relevance,
#     SearchResultSchema.manual_full_text_relevance).filter(SearchResultSchema.search_id == search_id).all())



# result = (retrieve_papers_by_query(session, 31))
# print(result)
# # i = 0 
# # for r in result:
# #     i+=1
# #     print(f"SEARCH_ID : {r.search_id}, title: {r.title} ,  abstract: {r.abstract} , year {r.year}")

# # print(i)



