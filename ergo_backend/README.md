# Ergo Project Manager - Backend

Robust and scalable Flask-based backend for the Ergo Project Manager application. This service handles project management, task tracking and user authentication using a clean Controller-Repository-Model architecture.

## Tech Stack

- **Core**: [Flask](https://flask.palletsprojects.com/) (Python)
- **ORM**: [SQLAlchemy](https://www.sqlalchemy.org/)
- **Database**: MySQL (configured via DATABASE_URL)
- **Logging**: Custom internal logger for tracking operations
- **Architecture**: Modular structure with separate routes, controllers and repositories

## Project Structure

```text
ergo_backend/
├── config/             # Configuration and environment settings
├── controllers/        # Business logic handlers
├── database/           # Database utilities and migrations
├── models/             # SQLAlchemy database models
├── repositories/       # Data access layer
├── routes/             # API route definitions and Registry
├── utils/              # Helper functions and utilities
└── main.py             # Application entry point
```

## Getting Started

### Prerequisites

- Python 3.10+
- Pip (Python package manager)
- Virtualenv (recommended)

### Installation

1. **Navigate to the backend directory**:
   ```bash
   cd ergo_backend
   ```

2. **Create and activate a virtual environment**:
   ```bash
   python -m venv .venv
   # On Windows:
   .venv\Scripts\activate
   # On macOS/Linux:
   source .venv/bin/activate
   ```

3. **Install dependencies**:
   *(Ensure you have a requirements.txt file or use the existing .venv)*
   ```bash
   pip install flask sqlalchemy psycopg2-binary
   ```

### Configuration

Create a `.env` file in the `ergo_backend` root directory with the following variables:

```env
DATABASE_URL=mysql+pymysql://username:password@localhost:3306/ergo_db
# Add other environment-specific variables here
```

## Running the App

To start the development server:

```bash
python main.py
```

The API will be available at `http://localhost:5000` (default Flask port).

## API Endpoints Summary

- **Users**: Registration, AuthLogin and Profile management.
- **Projects**: Create, Read, Update and Delete project entities.
- **Tasks**: Lifecycle management of tasks within projects.

*For detailed API documentation, refer to the route definitions in `routes/`.*

## Development

- **Migrations**: Database tables are automatically created on startup via the `run_migrations` utility in `database/db_utils/database_utils.py`.
- **Debugging**: The application runs with `debug=True` by default in development mode within `main.py`.