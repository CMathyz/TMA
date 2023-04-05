from sqlalchemy import create_engine

from sqlalchemy.orm import sessionmaker, declarative_base

SQL_ALCHEMY_DATABASE_URL = "sqlite:///./core/database/database.db"

# Creation du moteur sqlalchemy
engine = create_engine(SQL_ALCHEMY_DATABASE_URL)

# Conception de la session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
