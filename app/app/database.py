from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://doadmin:AVNS_nq_7NWCBc9D5HIhveK_@db-postgresql-tor1-74366-do-user-17707540-0.h.db.ondigitalocean.com:25060/defaultdb?sslmode=require"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()