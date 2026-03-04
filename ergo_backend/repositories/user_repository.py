from database.database_utils import get_session
from typing import Dict, Optional
from models.user import User
from utils.logger import logger
from werkzeug.security import generate_password_hash, check_password_hash


class UserRepository:

    def create_user_account(self, user_details: Dict) -> None:
        try:
            with get_session() as user_session:
                new_user = User(
                    first_name = user_details["first_name"],
                    last_name=user_details["last_name"],
                    email = user_details["email"],
                    password = generate_password_hash(user_details["password"])
                )
                user_session.add(new_user)
        except Exception as error:
            logger.error(f"Error creating user:{error}")


    def get_user_account(self, user_id: int) -> Optional[User]:
        try:
            with get_session() as user_session:
                user_account = user_session.query(User).filter(User.id == user_id).first()
                if user_account is None:
                    logger.warning("User account not found")
                    return None
                return user_account
        except Exception as error:
            logger.error(f"Error getting user account:{error}")


    def update_user_account(self, user_id: int, new_account_data: Dict) -> None:
        try:
            with get_session() as user_session:
                user_account = user_session.query(User).filter(User.id == user_id).first()
                if user_account is None:
                    logger.warning(f"User account not found!")
                    return
                user_account.first_name = new_account_data["first_name"]
                user_account.last_name = new_account_data["last_name"]
        except Exception as error:
            logger.error(f"Error updating user account:{error}")


    def change_user_password(self, user_id: int, current_password: str, new_password: str) -> bool:
        try:
            with get_session() as user_session:
                user_account = user_session.query(User).filter(User.id == user_id).first()
                if user_account is None:
                    logger.warning(f"User {user_id} not found")
                    return False
                if not check_password_hash(user_account.password, current_password):
                    logger.warning(f"Incorrect current password for user {user_id}")
                    return False
                user_account.password = generate_password_hash(new_password)
                return True
        except Exception as error:
            logger.error(f"Error changing password: {error}")
            return False


    def get_user_email(self, email: str) -> Optional[str]:
        try:
            with get_session() as user_session:
                user_email = user_session.query(User).filter(User.email == email).first()
                if user_email is None:
                    return None
                return user_email
        except Exception as error:
            logger.error(f"Error getting user email:{error}")


    def destroy_user_account(self, user_id: int) -> None:
        try:
            with get_session() as user_session:
                user_account = user_session.query(User).filter(User.id == user_id).first()
                if user_account is None:
                    logger.warning(f"User account not found!")
                    return
                user_session.delete(user_account)
        except Exception as error:
            logger.error(f"Error deleting user account: {error}")