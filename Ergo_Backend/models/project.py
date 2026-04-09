from sqlalchemy import (
    Column,
    String,
    Integer,
    Text,
    ForeignKey
)

from database.db_utils.database_utils import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(Text, nullable=True)
    owner_id = Column(Integer, ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
