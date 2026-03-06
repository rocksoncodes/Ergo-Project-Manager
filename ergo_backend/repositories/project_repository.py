from database.db_utils.database_utils import get_session
from models.project import Project
from typing import  Dict, List
from utils.logger import logger

class ProjectRepository:

    def create_project(self, new_project_data: Dict) -> None:
        try:
            with get_session() as project_session:
                new_project = Project(
                    title = new_project_data["title"],
                    description = new_project_data["description"],
                )
                project_session.add(new_project)
        except Exception as error:
            logger.error(f"Error creating project: {error}")
            raise


    def get_project(self, project_id: int) -> Dict | None:
        try:
            with get_session() as project_session:
                specific_project = project_session.query(Project).filter(Project.id == project_id).first()
                if not specific_project:
                    return None
                return {
                    "id": specific_project.id,
                    "title": specific_project.title,
                    "owner_id": specific_project.owner_id,
                    "description": specific_project.description,
                }
        except Exception as error:
            logger.error(f"Error getting project: {error}")
            return None


    def get_all_projects(self) -> List[Dict]:
        try:
            with get_session() as project_session:
                every_project = project_session.query(Project).all()
                all_project_records = []
                for project in every_project:
                    all_project_records.append(
                        {
                            "id": project.id,
                            "title": project.title,
                            "owner_id": project.owner_id,
                            "description": project.description,
                        }
                    )

                return all_project_records
        except Exception as error:
            logger.error(f"Error getting all projects: {error}")
            return []


    def update_project(self, project_id: int, new_project_data: Dict) -> bool:
        try:
            with get_session() as project_session:
                project = project_session.query(Project).filter(Project.id == project_id).first()
                if not project:
                    logger.warning(f"Project {project_id} not found")
                    return False
                if "title" in new_project_data:
                    project.title = new_project_data["title"]
                if "description" in new_project_data:
                    project.description = new_project_data["description"]
                if "status" in new_project_data:
                    project.status = new_project_data["status"]
                if "is_completed" in new_project_data:
                    project.is_completed = new_project_data["is_completed"]
                return True
        except Exception as error:
            logger.error(f"Error updating project:{error}")
            raise


    def destroy_project(self, project_id: int) -> bool:
        try:
            with get_session() as project_session:
                specific_project = project_session.query(Project).filter(Project.id == project_id).first()
                if not specific_project:
                    logger.warning(f"Project {project_id} not found")
                    return False
                project_session.delete(specific_project)
                return True
        except Exception as error:
            logger.error(f"Error deleting project:{error}")
            raise