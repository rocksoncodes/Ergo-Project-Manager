from flask import Blueprint
from controllers.task_controller import TaskController

task_bp = Blueprint("tasks", __name__, url_prefix="/tasks")
task_controller = TaskController()


@task_bp.route("/create-task", methods=["POST"])
def create_task():
    return task_controller.create_task()

@task_bp.route("/<int:task_id>/get-task", methods=["GET"])
def get_task(task_id: int):
    return task_controller.get_task(task_id)

@task_bp.route("/get-tasks", methods=["GET"])
def get_all_tasks():
    return task_controller.get_all_tasks()

@task_bp.route("/<int:task_id>/update-task", methods=["PUT"])
def update_task(task_id: int):
    return task_controller.update_task(task_id)

@task_bp.route("/<int:task_id>/destroy-task", methods=["DELETE"])
def destroy_task(task_id: int):
    return task_controller.destroy_task(task_id)