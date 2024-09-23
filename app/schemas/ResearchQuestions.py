import database
from database import Base
from sqlalchemy import Column,  Integer, ForeignKey, Text



class ResearchQuestions(Base):

    __tablename__ = "research_questions"

    # Primary and foriegn keys
    research_question_id = Column(Integer, primary_key=True, autoincrement=True)
    search_id = Column(Integer, ForeignKey("searches.search_id"), nullable=False)

    # Details of paper that are fetched from the API
    research_question = Column(Text, nullable=True)
    relevant_papers = Column(Text, nullable=True)
    