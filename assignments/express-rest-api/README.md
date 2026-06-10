# 📘 Assignment: Intro to REST APIs with Express.js

## 🎯 Objective

Build a simple RESTful API using Node.js and Express. The assignment covers defining routes, parsing JSON request bodies, handling route parameters, and returning proper HTTP status codes.

## 📝 Tasks

### 🛠️ Create a basic CRUD API

#### Description
Implement an Express application that provides endpoints to create, read, update, and delete `items`. Use an in-memory object as the datastore for this exercise.

#### Requirements
Completed program should:

- Start an Express server and expose a root/health endpoint
- Implement endpoints: `GET /items`, `GET /items/:id`, `POST /items`, `PUT /items/:id`, `DELETE /items/:id`
- Accept and validate JSON request bodies for creating/updating items
- Return appropriate HTTP status codes (200/201/404/204)
- Use an in-memory datastore (object) to persist items during runtime

## 📁 Files

- Starter app: `assignments/express-rest-api/app.js`
- Package manifest: `assignments/express-rest-api/package.json`

## 🎓 Learning Outcomes

- Understand Express app structure and routing
- Parse and validate JSON request bodies using built-in middleware
- Use HTTP methods correctly and return appropriate status codes
- Run the app locally with `npm start` and test with curl/Postman

## ⏱️ Estimated Time

30 - 60 minutes

## 💡 Hints

- Use `express.json()` middleware to parse JSON bodies.
- Use a JS object keyed by ID to store items in memory.
- Validate required fields and respond with `400` or `422` for invalid input.
- Run the server with `npm install` then `npm start` in the assignment folder.

---

Run instructions:

1. Install dependencies:

```bash
cd assignments/express-rest-api
npm install
```

2. Start the server:

```bash
npm start
```

3. Test endpoints with curl or Postman against `http://localhost:3000`.
