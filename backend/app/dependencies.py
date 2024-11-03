from typing import Generator
from sqlalchemy.orm import Session
from .database import database


def get_db() -> Generator[Session, None, None]:
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()
