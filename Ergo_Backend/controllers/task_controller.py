from flask import jsonify, request

from repositories.task_repository import TaskRepository

class TaskController:
    def __init__(self):
        self.task_repo = TaskRepository()


    def create_task(self):
        payload = request.get_json()

        if not payload:
            return jsonify({"error": "Invalid payload"}), 400

        if "description" and "title" not in payload:
            return jsonify(
                {"error": "Task title & description is required"}), 400

        try:
            self.task_repo.create_task(payload)
        except Exception:
            return jsonify({"error": "Failed to create task"}), 500

        return jsonify({"success": "Task created successfully"}), 201


    def get_task(self, task_id: int):
        every_task = self.task_repo.get_task(task_id)

        if not every_task:
            return jsonify({"message": "No tasks found"}), 404

        return jsonify(every_task), 200


    def get_all_tasks(self):
        every_task = self.task_repo.get_all_tasks()

        if not every_task:
            return jsonify({"message": "No tasks found"}), 404

        return jsonify(every_task), 200


    def update_task(self, task_id: int):
        payload = request.get_json()

        if not payload:
            return jsonify({"error": "Invalid payload"}), 400

        try:
            updated = self.task_repo.update_task(task_id, payload)
        except Exception:
            return jsonify({"error": "Failed to update task"}), 500

        if not updated:
            return jsonify({"error": "Task not found"}), 404

        return jsonify({"success": "Task updated successfully"}), 200


    def destroy_task(self, task_id: int):
        try:
            deleted = self.task_repo.destroy_task(task_id)

            if not deleted:
                return jsonify({"error": "Task not found"}), 404

        except Exception:
            return jsonify({"error": "Failed to delete task"}), 500

        return jsonify({"success": "Task deleted successfully"}), 200
