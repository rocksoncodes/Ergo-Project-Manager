from sqlalchemy import Column, String, Integer
from database.database_utils import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)