# Ergo Project Manager

A full-stack, comprehensive project management application designed to efficiently track projects, tasks and teams. Built with a Flask backend API and an Angular frontend interface.

## 1. Tech Stack
- **Backend (API)**: A robust Python Flask API providing secure endpoints, data validation and scalable database operations using SQLAlchemy.
- **Frontend (UI)**: A modern, responsive Angular Single Page Application (SPA) offering an intuitive user experience and real-time state management.
- **Database**: Standardized local SQL database integration for reliable data persistence.

## 2. Quick Start

### Prerequisites
- Python 3.9+ (tested with latest versions)
- Node.js 18+ and npm
- Angular CLI (`npm install -g @angular/cli`)
- A running instance of MySQL or a compatible SQL database.

### Installation

#### Backend Setup
```bash
git clone <repository-url>
cd Ergo-Project-Manager/Ergo_Backend

# Create a virtual environment
python -m venv .venv

# On Windows:
# .\.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

*Don't forget to configure your environment variables based on an `.env.example` in the backend directory!*

#### Frontend Setup
```bash
cd Ergo-Project-Manager/ergo_frontend
npm install
```

### Run the Application

**1. Run the Backend API:**
```bash
cd Ergo_Backend
python main.py
```
*(The backend typically runs on `http://127.0.0.1:5000`)*

**2. Run the Frontend App:**
```bash
cd ergo_frontend
npm start
```
*(The Angular dev server typically runs on `http://localhost:4200`)*

## 3. Project Structure

```text
Ergo-Project-Manager/
├── ergo_backend/               # Python Flask API
│   ├── config/                 # Environment and app configuration
│   ├── controllers/            # Request handling logic (Project, Task, User)
│   ├── database/               # DB initialization and utils
│   ├── models/                 # SQLAlchemy ORM models (Project, Task, User)
│   ├── repositories/           # Data access patterns
│   ├── routes/                 # Blueprint and route definitions
│   ├── utils/                  # Shared helpers
│   ├── main.py                 # Application entry point
│   └── requirements.txt        # Python dependencies
│
└── ergo_frontend/              # Angular (v21) Web App
    ├── src/
    │   ├── app/
    │   │   ├── features/       # Feature-based modules (e.g., auth, projects)
    │   │   ├── app.routes.ts   # Client-side routing
    │   │   ├── app.config.ts   # Core Angular configuration
    │   │   └── app.ts          # Main component
    │   └── assets/             # Static assets (images, icons)
    ├── package.json            # Node.js dependencies
    └── angular.json            # Angular workspace configuration
```

## 4. How it Works
1. **Client Interaction**: Users interact with the sleek Angular UI to create projects, define tasks, and manage their individual projects.
2. **API Communication**: The frontend sends HTTP requests to the secure Flask backend via services.
3. **Business Logic & Persistence**: The Flask controllers map the requests to repositories, updating the underlying SQLAlchemy models. Data is saved in the configured relational database.
4. **Data Delivery**: Responses are serialized back as JSON to the Angular app, dynamically updating the views seamlessly.

## 5. Development Status
- **Backend Infrastructure**: Flask blueprints, MVC architecture and database ORM configured. Dependencies are locked via `requirements.txt`.
- **Frontend Infrastructure**: Angular workspace setup, modern strict typing, Node SSR enabled and component-based structure generated.
- **Core Entities**: Setup in development for Projects, Tasks and Users.

## 6. Notes & Limitations
- The project is split into distinct `ergo_backend` and `ergo_frontend` directories, allowing independent scaling and deployments in the future.
- Ensure CORS is correctly configured in the backend if moving to a disparate production environment.
