# from ..database import Base
from sqlalchemy import Column, String, Integer, ForeignKey, Text, Float

# Use "..database import Base" when running the server and use:
# import database

# database.Base
# when using alembic to make migrations
from ..database import database


class VisualiseRerankedTitle(database.Base):
    __tablename__ = "visualise_reranked_title"

    # Primary and foriegn keys
    uid = Column(Integer, primary_key=True, autoincrement=True)
    query = Column(Text, nullable=True)
    score = Column(Float, nullable=True)
    title = Column(Text, nullable=True)
