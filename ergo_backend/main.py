from flask import Flask
from utils.route_registry import register_blueprints
from flask_cors import CORS


def create_flask_app():
    app = Flask(__name__)
    CORS(app)
    register_blueprints(app)
    return app


if __name__ == "__main__":
    flask_app = create_flask_app()
    flask_app.run(debug=True)
