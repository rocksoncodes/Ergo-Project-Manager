from database.database_utils import initialize_database
from models.task import Base as UserBase
from models.user import Base as TaskBase
from models.project import Base as ProjectBase


models = {
    "User": UserBase,
    "Task": TaskBase,
    "ProjectBase": ProjectBase
}

if __name__ == "__main__":
    initialize_database(models)