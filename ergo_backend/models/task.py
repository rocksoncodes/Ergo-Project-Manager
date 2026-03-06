from sqlalchemy import Column, String, Text, Boolean, Integer
from database.db_utils.database_utils import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(Text, nullable=True)
    status = Column(String(20), nullable=False)
    is_completed = Column(Boolean)
