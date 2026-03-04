from database.database_utils import get_session
from models.project import Project
from typing import  Dict, Optional, List
from utils.logger import logger

class ProjectRepository:

    def create_project(self, new_project_data: Dict) -> None:
        try:
            with get_session() as project_session:
                new_project = Project(
                    title = new_project_data["title"],
                    description = new_project_data["title"],
                )
                project_session.add(new_project)
        except Exception as error:
            logger.error(f"Error creating project: {error}")


    def get_specific_project(self, project_id: int) -> Optional[Project]:
        try:
            with get_session() as project_session:
                specific_project = project_session.query(Project).filter(Project.id == project_id).first()
                if specific_project is None:
                    return None
                return specific_project
        except Exception as error:
            logger.error(f"Error getting project: {error}")


    def all_projects(self) -> List[Project]:
        try:
            with get_session() as project_session:
                every_project = project_session.query(Project).all()
                return every_project
        except Exception as error:
            logger.error(f"Error getting all projects: {error}")
            return []


    def update_specific_project(self, project_id: int, new_project_data: Dict) -> None:
        try:
            with get_session() as project_session:
                project = project_session.query(Project).filter(Project.id == project_id).first()
                if project is None:
                    logger.warning(f"Project {project_id} not found")
                    return
                project.title = new_project_data["title"]
                project.description = new_project_data["description"]
                project.status = new_project_data["status"]
                project.is_completed = new_project_data["is_completed"]
        except Exception as error:
            logger.error(f"Error updating project:{error}")


    def destroy_project(self, project_id: int) -> None:
        try:
            with get_session() as project_session:
                specific_project = project_session.query(Project).filter(Project.id == project_id).first()
                if specific_project is None:
                    logger.warning(f"Project {project_id} not found")
                    return
                project_session.delete(specific_project)
        except Exception as error:
            logger.error(f"Error deleting project:{error}")