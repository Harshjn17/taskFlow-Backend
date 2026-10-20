# TaskFlow Backend (in-progress)

TaskFlow is a task management REST API built with Node.js, Express.js, and MongoDB. It provides backend functionality for creating, organizing, updating, and managing tasks.

## Features

- Create, read, update, and delete tasks (CRUD)
- Task status management
- Task priority management
- Task descriptions and due dates
- MongoDB database integration
- RESTful API architecture
- Structured error handling

## Tech Stack

- **Runtime:** Node.js
- **Backend:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Testing:** Postman

## Project Structure

```text
taskFlow-Backend/
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

*Note: Adjust the folder structure above to match your actual project.*

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Harshjn17/taskFlow-Backend.git
cd taskFlow-Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with your own database connection string.

### 4. Start the server

Use the command configured in your `package.json`. For example:

```bash
npm run dev
```

Or, if you do not have a development script:

```bash
node src/app.js
```

## Task Data Model

A task may contain the following fields:

| Field | Description |
|---|---|
| `title` | Task title |
| `description` | Details about the task |
| `status` | `todo`, `in-progress`, or `completed` |
| `priority` | `low`, `medium`, or `high` |
| `dueDate` | Task deadline |
| `createdAt` | Creation timestamp |
| `updatedAt` | Last update timestamp |

The actual accepted values depend on your Mongoose schema.

## API Endpoints

The following is an example API design. Update the paths to match your Express routes.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/tasks` | Create a task |
| `GET` | `/tasks` | Get all tasks |
| `GET` | `/tasks/:id` | Get a task by ID |
| `PATCH` | `/tasks/:id` | Update a task |
| `DELETE` | `/tasks/:id` | Delete a task |

### Example: Create a Task

**Request:** `POST /tasks`

```json
{
  "title": "Complete backend project",
  "description": "Implement TaskFlow CRUD operations",
  "status": "todo",
  "priority": "high",
  "dueDate": "2026-10-25"
}
```

The server should validate the request and save the task to MongoDB.

## Testing

You can test the API using Postman or another HTTP client.

Test the following scenarios:

- Create a task with valid data.
- Retrieve all tasks and individual tasks.
- Update task fields.
- Delete an existing task.
- Handle invalid task IDs and missing tasks.
- Validate required fields and invalid input.

## Environment Variables

Never commit your `.env` file or expose database credentials in your repository.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
```

## Future Improvements

- JWT-based authentication
- User-specific tasks
- Input validation
- Pagination, filtering, and sorting
- Centralized error-handling middleware
- API documentation with Swagger

## Author

**Harsh Jain**

GitHub: [Harshjn17](https://github.com/Harshjn17)

---

Built as a backend development project to practice REST APIs, Express.js, MongoDB, and CRUD operations.
