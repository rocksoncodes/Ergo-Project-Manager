from flask import jsonify, request

from repositories.user_repository import UserRepository

class UserController:
    def __init__(self):
        self.user_repo = UserRepository()


    def create_user_account(self):
        payload = request.get_json()

        if not payload or "email" not in payload:
            return jsonify({"error": "Email is required"}), 400

        if not payload or "password" not in payload:
            return jsonify({"error": "Password is required"}), 400

        try:
            self.user_repo.create_user_account(payload)
        except Exception:
            return jsonify({"error": "Failed to create user account"}), 500

        return jsonify({"success": "User account created successfully"}), 201


    def get_user_account(self, user_id: int):
        user_account = self.user_repo.get_user_account(user_id)

        if not user_account:
            return jsonify({"message": "User account not found"}), 404

        return jsonify(user_account), 200


    def update_user_account(self, user_id: int):
        payload = request.get_json()

        if not payload:
            return jsonify({"error": "Invalid payload"}), 400

        try:
            updated = self.user_repo.update_user_account(user_id, payload)
        except Exception:
            return jsonify({"error": "Failed to update user account"}), 500

        if not updated:
            return jsonify({"error": "User account not found"}), 404

        return jsonify({"success": "User account updated successfully"}), 200


    def change_user_password(self, user_id: int):
        payload = request.get_json()

        if not payload:
            return jsonify({"error": "Invalid payload"}), 400
        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        try:
            success = self.user_repo.change_user_password(
                user_id,
                payload["current_password"],
                payload["new_password"]
            )
            if not success:
                return jsonify({"error": "Incorrect current password"}), 401
            return jsonify({"success": "User password updated"}), 200
        except Exception:
            return jsonify({"error": "Failed to change user password"}), 500


    def get_user_email(self, user_id: int):
        if not user_id:
            return jsonify({"error": "User ID is required"}), 400

        try:
            email = self.user_repo.get_user_email(user_id)

            if not email:
                return jsonify({"Error": "user email not found"}), 404

            return jsonify(email), 200
        except Exception:
            return jsonify({"error": "Failed to change user email"}), 500


    def destroy_user_account(self, user_id: int):
        try:
            deleted = self.user_repo.destroy_user_account(user_id)
        except Exception:
            return jsonify({"error": "Failed to delete user account"}), 500

        if not deleted:
            return jsonify({"error": "User not found"}), 404

        return jsonify({"success": "User deleted successfully"}), 200
