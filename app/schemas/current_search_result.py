# import database

from ..database import Base

from sqlalchemy import Column, JSON, String


class CurrentSearchResult(Base):

    __tablename__ = "current_search_result"

    # Primary key
    uid = Column(String, primary_key=True)

    # Using a JSON to store the entire array of papers because it is easier to replace
    # when the user makes a new search.
    papers = Column(JSON, nullable=True)
