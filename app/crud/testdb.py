from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..schemas.search import Search as SearchSchema # Import your model

# Set up the database connection
engine = create_engine("postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require")
 
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = Session()

# Example query

def retrieve_all_papers(db:Session, uid : int):

    return(db.query(SearchSchema).filter(SearchSchema.uid == uid).all())




result = (retrieve_all_papers(session, "2eYbiBc5shN2ynLx857epU9BOH13"))

for r in result:
    print(f"query : {r.search_query},uid : {r.uid} ,  id: {r.search_id} ")





