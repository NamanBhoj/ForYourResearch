# from ..database import Base
from sqlalchemy import Column, String, Integer
import database


class Search(database.Base):
    __tablename__ = "searches"

    search_id = Column(Integer, primary_key=True, autoincrement=True)
    uid = Column(String, nullable=False)
    search_query = Column(String, nullable=False)
