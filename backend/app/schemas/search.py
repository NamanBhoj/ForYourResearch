from ..database import database
from sqlalchemy import Column, String, Integer

# import database 
# from database import Base

# import database


class Search(database.Base):
    __tablename__ = "searches"

    search_id = Column(Integer, primary_key=True, autoincrement=True)
    uid = Column(String, nullable=False)
    search_query = Column(String, nullable=False)
