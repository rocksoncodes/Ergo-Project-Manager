from flask import Blueprint
from controllers.project_controller import ProjectController

project_bp = Blueprint("projects", __name__ ,url_prefix="/projects")
project_controller = ProjectController()


@project_bp.route("/create-project", methods=["POST"])
def create_project():
    return project_controller.create_project()

@project_bp.route("/<int:project_id>/get-project", methods =["GET"])
def get_project(project_id: int):
    return project_controller.get_project(project_id)

@project_bp.route("/get-projects", methods =["GET"])
def get_all_projects():
    return project_controller.get_all_projects()

@project_bp.route("/<int:project_id>/update-project", methods =["PUT"])
def update_project(project_id: int):
    return project_controller.update_project(project_id)

@project_bp.route("/<int:project_id>/destroy-project", methods =["DELETE "])
def destroy_project(project_id: int):
    return project_controller.destroy_project(project_id)