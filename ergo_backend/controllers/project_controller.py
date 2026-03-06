from flask import jsonify, request
from repositories.project_repository import ProjectRepository

class ProjectController:
    def __init__(self):
        self.project_repo = ProjectRepository()

    def create_project(self):
        payload = request.get_json()

        if not payload or "title" not in payload:
            return jsonify({"error": "Title is required"}), 400

        if "description" not in payload:
            return jsonify({"error": "Description is required"}), 400

        try:
            self.project_repo.create_project(payload)
        except Exception:
            return jsonify({"error": "Failed to create project"}), 500

        return jsonify({"success":"Project created successfully"}), 201


    def get_project(self, project_id: int):
        project = self.project_repo.get_project(project_id)

        if project is None:
            return jsonify({"error": "Project not found"}), 404

        return jsonify(project), 200


    def get_all_projects(self):
        every_project = self.project_repo.get_all_projects()

        if not every_project:
            return jsonify({"message": "No projects found"}), 404

        return jsonify(every_project), 200


    def update_project(self, project_id: int):
        payload = request.get_json()

        if not payload:
            return jsonify({"error": "Invalid payload"}), 400

        try:
            updated = self.project_repo.update_project(project_id, payload)
        except Exception:
            return jsonify({"error": "Failed to update project"}), 500

        if not updated:
            return jsonify({"error": "Project not found"}), 404

        return jsonify({"success":"Project updated successfully"}), 200


    def destroy_project(self, project_id: int):
        try:
            deleted = self.project_repo.destroy_project(project_id)
        except Exception:
            return jsonify({"error": "Failed to delete project"}), 500

        if not deleted:
            return jsonify({"error": "Project not found"}), 404

        return jsonify({"success": "Project deleted successfully"}), 200
