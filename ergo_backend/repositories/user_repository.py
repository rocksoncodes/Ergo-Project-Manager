from database.database_utils import get_session
from typing import Dict, Optional, List
from models.user import User
from utils.logger import logger
from werkzeug.security import generate_password_hash


class UserRepository:

    def create_user(self, user_details) -> None:
        try:
            with get_session() as user_session:
                new_user = User(
                    email = user_details["email"],
                    password = generate_password_hash(user_details["password"])
                )
                user_session.add(new_user)
        except Exception as error:
            logger.error(f"Error creating user:{error}")


    