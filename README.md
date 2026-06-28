# TaskZen Backend

RESTful backend API for **TaskZen**, a full-stack task management application. Built with **Node.js**, **Express.js**, and **MongoDB**, this backend provides CRUD operations for task management with a clean layered architecture following the **Controller → Service → Model** pattern.

---

## Features

* Create, retrieve, update and delete tasks
* RESTful API architecture
* MongoDB integration with Mongoose
* Layered architecture (Routes → Controllers → Services → Models)
* Input validation using Mongoose schemas
* Environment variable support
* CORS enabled
* Automatic timestamps (`createdAt`, `updatedAt`)

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv
* Nodemon

---

## Project Structure

```text
taskzen-backend
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── constants
│   │   └── task.constants.js
│   │
│   ├── controllers
│   │   └── task.controller.js
│   │
│   ├── middleware
│   │   └── asyncHandler.js
│   │
│   ├── models
│   │   └── task.model.js
│   │
│   ├── routes
│   │   └── task.routes.js
│   │
│   ├── services
│   │   └── task.service.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/RishikeshKarkhanis/taskzen-backend.git

cd taskzen-backend
```

---

### Install dependencies

```bash
npm install
```

---

### Create a `.env` file

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string
```

---

### Run the development server

```bash
npm run dev
```

The server will start on:

```text
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Retrieve all tasks      |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

---

## Environment Variables

| Variable      | Description                |
| ------------- | -------------------------- |
| `PORT`        | Port number for the server |
| `MONGODB_URI` | MongoDB connection string  |

---

## Frontend Repository

The frontend for this project is available at:

```text
https://github.com/yourusername/taskzen-frontend
```

---

## Future Improvements

* User Authentication & Authorization
* Pagination
* Server-side Filtering & Sorting
* Request Validation Middleware
* Rate Limiting
* API Documentation (Swagger/OpenAPI)

---

## Author

**Rishikesh Karkhanis**

B.Tech Computer Science Engineering (AI & ML)

---

## License

This project is licensed under the MIT License.
