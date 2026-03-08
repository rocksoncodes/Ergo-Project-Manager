from sqlalchemy import Column, String, Integer
from database.db_utils.database_utils import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)
    first_name = Column(String(30), nullable=False)
    last_name = Column(String(30), nullable=True)
    email = Column(String(50), nullable=False)
    password = Column(String(256), nullable=False)