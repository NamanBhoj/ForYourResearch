from sqlalchemy import Column, String, Integer, ForeignKey, Text
import database


class SearchResultFullText(database.Base):
    __tablename__ = "search_results_full_text"

    # Primary and foriegn keys
    search_result_full_text_id = Column(Integer, primary_key=True, autoincrement=True)
    #A foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table. The foreign key is used to establish a link between the data in two tables
    search_results_id = Column(
        Integer,
        ForeignKey("search_results_title_abstract.search_result_id"),
        nullable=False,
    )

    full_text = Column(Text, nullable=True)
    manual_full_text_relevance = Column(String, nullable=True)
    ai_full_text_relevance = Column(String, nullable=True)
