from database.database_utils import get_session
from typing import Dict, Optional, List
from models.task import Task
from utils.logger import logger

class TaskRepository:

    def create_task(self, task_details: Dict) -> None:
        try:
            with get_session() as task_session:
                new_task = Task (
                    title = task_details["title"],
                    description = task_details["description"],
                    status = task_details["status"],
                    is_completed = task_details["is_completed"]
                )
                task_session.add(new_task)
        except Exception as error:
            logger.error(f"Error creating task:{error}")


    def get_specific_task(self, task_id: int) -> Optional[Task]:
        try:
            with get_session() as task_session:
                specific_task = task_session.query(Task).filter(Task.id == task_id).first()
                if specific_task is None:
                    return None
                return specific_task
        except Exception as error:
            logger.error(f"Error getting task:{error}")


    def get_all_tasks(self) -> List[Task]:
        try:
            with get_session() as task_session:
                every_task = task_session.query(Task).all()
                return every_task
        except Exception as error:
            logger.error(f"Error getting all tasks:{error}")
            return []


    def update_specific_task(self, task_id: int, new_task_data: Dict) -> None:
        try:
            with get_session() as task_session:
                task = task_session.query(Task).filter(Task.id == task_id).first()
                if task is None:
                    logger.warning(f"Task {task_id} not found")
                    return
                task.title = new_task_data["title"]
                task.description = new_task_data["description"]
                task.status = new_task_data["status"]
                task.is_completed = new_task_data["is_completed"]
        except Exception as error:
            logger.error(f"Error updating task:{error}")


    def destroy_task(self, task_id: int) -> None:
        try:
            with get_session() as task_session:
                specific_task = task_session.query(Task).filter(Task.id == task_id).first()
                if specific_task is None:
                    logger.warning(f"Task {task_id} not found!")
                    return
                task_session.delete(specific_task)
        except Exception as error:
            logger.error(f"Error deleting task:{error}")
