# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small RESTful API using the FastAPI framework. The assignment covers defining endpoints, handling path and query parameters, request bodies, and basic in-memory data persistence.

## 📝 Tasks

### 🛠️ Create a basic CRUD API

#### Description
Implement a FastAPI application that exposes endpoints to create, read, update, and delete simple `items`. The app should run with Uvicorn and use an in-memory structure (e.g., a dict) as a lightweight datastore for the exercise.

#### Requirements
Completed program should:

- Start a FastAPI app and expose a health/root endpoint
- Implement endpoints: `GET /items/`, `GET /items/{id}`, `POST /items/`, `PUT /items/{id}`, `DELETE /items/{id}`
- Accept and validate JSON request bodies for creating/updating items
- Return appropriate HTTP status codes (200/201/404/204)
- Use an in-memory data store (dict) to persist items for the running session

## 📁 Files

- Starter app: `assignments/fastapi-rest-api/starter-code.py`
- Dependencies: `assignments/fastapi-rest-api/requirements.txt`

## 🎓 Learning Outcomes

- Understand FastAPI app structure and request/response handling
- Define path and query parameters and use Pydantic models for validation
- Use HTTP methods correctly and return appropriate status codes
- Run the app locally with Uvicorn

## ⏱️ Estimated Time

90 - 120 minutes

## 💡 Hints

- Use Pydantic `BaseModel` for request bodies and validation.
- Start with simple `GET` endpoints before adding `POST/PUT/DELETE`.
- Use `from fastapi import HTTPException` to raise `404` where needed.
- Run the server with: `uvicorn starter-code:app --reload --port 8000` from the assignment folder.

---

Run instructions:

1. Create a virtual environment and install requirements:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Start the server:

```bash
uvicorn starter-code:app --reload --port 8000
```

3. Open `http://localhost:8000/docs` to explore the auto-generated OpenAPI UI.
