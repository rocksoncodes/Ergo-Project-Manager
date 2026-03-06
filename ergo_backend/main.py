from flask import Flask
from routes.route_registry import register_blueprints


def create_flask_app():
    app = Flask(__name__)
    register_blueprints(app)
    return app


if __name__ == "__main__":
    flask_app = create_flask_app()
    flask_app.run(debug=True)
