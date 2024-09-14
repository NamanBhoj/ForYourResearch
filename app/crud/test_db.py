from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..schemas.search import Search as SearchSchema
from ..models.search import SearchCreate

engine = create_engine(
    "postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require"
)

Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = Session()


def save_query(search_create: SearchCreate, db=session):
    all_search_query_tuples = (
        db.query(SearchSchema.search_query)
        .filter(SearchSchema.uid == search_create.uid)
        .all()
    )

    search_query_list = convert_to_list(all_search_query_tuples)
    base_search_query = search_create.search_query + " ⦿ "

    max_number = 0
    for search_query in search_query_list:
        if search_query.startswith(base_search_query):
            number_part = search_query.split(" ⦿ ")[1]
            number = int(number_part)
            if number > max_number:
                max_number = number

    new_number = max_number + 1
    unique_search_query = f"{base_search_query}{new_number}"
    row = SearchSchema(uid=search_create.uid, search_query=unique_search_query)
    db.add(row)
    db.commit()
    print("storing")
    db.refresh(row)
    return row


def convert_to_list(queries):
    queries_list = []
    for (query,) in queries:
        queries_list.append(query)
    return queries_list


save_query(
    SearchCreate(uid="2eYbiBc5shN2ynLx857epU9BOH13", search_query="virtual reality"), session
)
