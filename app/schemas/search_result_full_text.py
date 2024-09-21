from sqlalchemy import Column, String, Integer, ForeignKey, Text
import database


class SearchResultFullText(database.Base):
    __tablename__ = "search_results_full_text"

    # Primary and foriegn keys
    search_result_full_text_id = Column(Integer, primary_key=True, autoincrement=True)
    search_results_id = Column(
        Integer,
        ForeignKey("search_results_title_abstract.search_result_id"),
        nullable=False,
    )

    full_text = Column(Text, nullable=True)
    manual_full_text_relevance = Column(String, nullable=True)
    ai_full_text_relevance = Column(String, nullable=True)
