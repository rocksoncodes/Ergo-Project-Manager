from flask import Blueprint
from controllers.user_contoller import UserController

user_bp = Blueprint("user", __name__, url_prefix="/users")
user_controller = UserController()


@user_bp.route("/create-user-account", methods=["POST"])
def create_user_account():
    return user_controller.create_user_account()

@user_bp.route("/<int:user_id>/get-user-account", methods=["GET"])
def get_user_account(user_id: int):
    return user_controller.get_user_account(user_id)

@user_bp.route("/<int:user_id>/get-user-email", methods=["GET"])
def get_user_email(user_id: int):
    return user_controller.get_user_email(user_id)

@user_bp.route("/<int:user_id>/update-user-account", methods=["PUT"])
def update_user_account(user_id: int):
    return user_controller.update_user_account(user_id)

@user_bp.route("/<int:user_id>/update-user-password", methods=["PUT"])
def change_user_password(user_id: int):
    return user_controller.change_user_password(user_id)

@user_bp.route("/<int:user_id>/destroy-user-account", methods=["DELETE"])
def destroy_user_account(user_id: int):
    return user_controller.destroy_user_account(user_id)