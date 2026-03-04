from database.database_utils import run_migrations
from models.task import Base as UserBase
from models.user import Base as TaskBase
from models.project import Base as ProjectBase


models = {
    "User": UserBase,
    "Task": TaskBase,
    "ProjectBase": ProjectBase
}

if __name__ == "__main__":
    run_migrations(models)