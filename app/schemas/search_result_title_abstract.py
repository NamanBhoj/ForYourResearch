# from ..database import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = "postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


class SearchResult(Base):
    __tablename__ = "search_results"

    # Primary and foriegn keys
    search_result_id = Column(Integer, primary_key=True, autoincrement=True)
    search_id = Column(Integer, ForeignKey("searches.search_id"), nullable=False)

    # Details of paper that are fetched from the API
    title = Column(String, nullable=True)
    abstract = Column(String, nullable=True)
    year = Column(Integer, nullable=True)
    url = Column(String, nullable=True)
    paperId = Column(String, nullable=True)
    # fullText = Column(String, nullable=True)
    tempfield = Column(String, nullable=True)
    # Relevance that is manually set by the user, manual_overall_relevance is the value of manually tagged papers
    # in our Library and PapersTable on the frontend
    manual_overall_relevance = Column(String, nullable=True)
    manual_title_relevance = Column(String, nullable=True)
    manual_abstract_relevance = Column(String, nullable=True)
    # manual_full_text_relevance = Column(String, nullable=True)

    # Relevance that will be determined by the LLM
    ai_overall_relevance = Column(String, nullable=True)
    ai_title_relevance = Column(String, nullable=True)
    ai_abstract_relevance = Column(String, nullable=True)
    # ai_full_text_relevance = Column(String, nullable=True)
