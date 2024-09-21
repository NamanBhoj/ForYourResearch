from sqlalchemy import Column, String, Integer, ForeignKey, Text
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = "postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


class SearchResultFullText(Base):
    __tablename__ = "search_results_full_text"

    # Primary and foriegn keys
    search_result_full_text_id = Column(Integer, primary_key=True, autoincrement=True)
    search_results_id = Column(
        Integer, ForeignKey("search_results.search_result_id"), nullable=False
    )

    full_text = Column(Text, nullable=True)
    manual_full_text_relevance = Column(String, nullable=True)
    ai_full_text_relevance = Column(String, nullable=True)
