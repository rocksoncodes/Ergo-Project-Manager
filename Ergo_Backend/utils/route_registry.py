from flask import Flask

from routes.project_routes import project_bp
from routes.task_routes import task_bp
from routes.user_routes import user_bp

def register_blueprints(app: Flask) -> None:
    app.register_blueprint(project_bp)
    app.register_blueprint(task_bp)
    app.register_blueprint(user_bp)
