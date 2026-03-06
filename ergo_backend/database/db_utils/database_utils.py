from contextlib import contextmanager
from config.enviroment import DATABASE_URL
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from utils.logger import logger

engine = create_engine(DATABASE_URL, echo=False)
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def run_migrations(models):
    try:
        for model_key, model_value in models.items():
            model_value.metadata.create_all(bind=engine)
            logger.info(f"Creating {model_key} table...")
        logger.info("Migrations completed successfully")
    except Exception as error:
        SystemExit(f"Error initializing the database: {error}")


@contextmanager
def get_session():
    session = SessionLocal()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()