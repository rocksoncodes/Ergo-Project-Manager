from typing import Dict, List

from database.db_utils.database_utils import get_session
from models.task import Task
from utils.logger import logger

class TaskRepository:

    def create_task(self, task_details: Dict) -> None:
        try:
            with get_session() as task_session:
                new_task = Task(
                    title=task_details["title"],
                    description=task_details["description"],
                    status=task_details["status"],
                    is_completed=task_details["is_completed"]
                )
                task_session.add(new_task)
        except Exception as error:
            logger.error(f"Error creating task:{error}")


    def get_task(self, task_id: int) -> Dict | None:
        try:
            with get_session() as task_session:
                specific_task = task_session.query(Task).filter(
                    Task.id == task_id).first()
                if specific_task is None:
                    return None
                return {
                    "id": specific_task.id,
                    "title": specific_task.title,
                    "description": specific_task.description,
                }
        except Exception as error:
            logger.error(f"Error getting task:{error}")


    def get_all_tasks(self) -> List[Dict]:
        try:
            with get_session() as task_session:
                every_task = task_session.query(Task).all()
                all_task_records = []
                for task in every_task:
                    all_task_records.append(
                        {
                            "id": task.id,
                            "title": task.title,
                            "description": task.description,
                        }
                    )
                return all_task_records
        except Exception as error:
            logger.error(f"Error getting all tasks:{error}")
            return []


    def update_task(self, task_id: int, new_task_data: Dict) -> bool:
        try:
            with get_session() as task_session:
                task = task_session.query(Task).filter(
                    Task.id == task_id).first()
                if task is None:
                    logger.warning(f"Task {task_id} not found")
                    return False
                if "title" in new_task_data:
                    task.title = new_task_data["title"]
                if "description" in new_task_data:
                    task.description = new_task_data["description"]
                if "status" in new_task_data:
                    task.status = new_task_data["status"]
                if "is_completed" in new_task_data:
                    task.is_completed = new_task_data["is_completed"]
                return True
        except Exception as error:
            logger.error(f"Error updating task:{error}")
            raise


    def destroy_task(self, task_id: int) -> bool:
        try:
            with get_session() as task_session:
                specific_task = task_session.query(Task).filter(
                    Task.id == task_id).first()
                if not specific_task:
                    logger.warning(f"Task {task_id} not found!")
                    return False
                task_session.delete(specific_task)
                return True
        except Exception as error:
            logger.error(f"Error deleting task:{error}")
            raise
