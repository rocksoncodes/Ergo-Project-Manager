from database.db_utils.database_utils import run_migrations
from models.project import Base as ProjectBase
from models.task import Base as UserBase
from models.user import Base as TaskBase

models = {
    "User": UserBase,
    "Task": TaskBase,
    "Project": ProjectBase
}

if __name__ == "__main__":
    run_migrations(models)
