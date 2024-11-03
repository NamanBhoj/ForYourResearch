"""Make search_result_full_text table

Revision ID: a13d0267d084
Revises: 7f102e5fc8ef
Create Date: 2024-09-21 16:30:26.587680

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a13d0267d084'
down_revision: Union[str, None] = '7f102e5fc8ef'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "search_results_full_text",
        sa.Column(
            "search_result_full_text_id",
            sa.Integer,
            primary_key=True,
            autoincrement=True,
        ),
        sa.Column(
            "search_results_id",
            sa.Integer,
            sa.ForeignKey("search_results.search_result_id"),
            nullable=False,
        ),
        sa.Column("full_text", sa.Text, nullable=True),
        sa.Column("manual_full_text_relevance", sa.String, nullable=True),
        sa.Column("ai_full_text_relevance", sa.String, nullable=True),
    )


def downgrade() -> None:
    pass
