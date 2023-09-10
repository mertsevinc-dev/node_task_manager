# Node.js Task Manager API

This project creates a simple task manager API using Node.js, Express, and Mongoose. The API allows you to create, update, delete, and retrieve tasks.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/mertsevinc-dev/node_task_manager.git
   ```

2. Navigate to the project directory:

   ```shell
   cd node_task_manager
   ```

3. Install the dependencies:

   ```shell
    npm install
   ```

4. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```shell
   PORT=3000
   MONGO_URI=mongodb://
   ```

5. Start the server:

   ```shell
   npm run dev
   ```

## USAGE

You can manage tasks using the following API endpoints:

- GET api/v1/tasks: Get all tasks.
- POST api/v1/tasks: Create a new task.
- GET api/v1/tasks/:id: Get a specific task.
- PATCH api/v1/tasks/:id: Update a specific task.
- DELETE api/v1/tasks/:id: Delete a specific task.

Example requests and responses:

- To get all tasks:

  ```shell
  GET api/v1/tasks
  ```

  Response:

  ```json
  {
    "tasks": [
      {
        "_id": "6460a85317da7d3ab9665f0d",
        "name": "updated task",
        "completed": true,
        "__v": 0
      },
      {
        "_id": "6460a869043f0df0b4ccb38b",
        "name": "New Task",
        "completed": false,
        "__v": 0
      }
    ]
  }
  ```

- To create a new task:

  ```shell
  POST api/v1/tasks
  ```

  Request body:

  ```json
  {
    "name": "New Task",
    "completed": false
  }
  ```

  Response:

  ```json
  {
    "task": {
      "_id": "6460a869043f0df0b4ccb38b",
      "name": "New Task",
      "completed": false,
      "__v": 0
    }
  }
  ```

- To get a specific task:

  ```shell
  GET api/v1/tasks/6460a869043f0df0b4ccb38b
  ```

  Response:

  ```json
  {
    "task": {
      "_id": "6460a869043f0df0b4ccb38b",
      "name": "New Task",
      "completed": false,
      "__v": 0
    }
  }
  ```

- To update a specific task:

  ```shell
  PATCH api/v1/tasks/6460a869043f0df0b4ccb38b
  ```

  Request body:

  ```json
  {
    "name": "updated task",
    "completed": true
  }
  ```

  Response:

  ```json
  {
    "task": {
      "_id": "6460a869043f0df0b4ccb38b",
      "name": "updated task",
      "completed": true,
      "__v": 0
    }
  }
  ```

- To delete a specific task:

  ```shell
  DELETE api/v1/tasks/6460a869043f0df0b4ccb38b
  ```

  Response:

  ```json
  {
    "task": {
      "_id": "6460a869043f0df0b4ccb38b",
      "name": "updated task",
      "completed": true,
      "__v": 0
    }
  }
  ```

## Environment Variables

The following environment variables are required to run this project:

- `PORT`: The port number for the server to listen on.
- `MONGO_URI`: The URI for the MongoDB database.

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment

- [Express](https://expressjs.com/) - Web application framework

- [Mongoose](https://mongoosejs.com/) - Object data modeling library

- [MongoDB](https://www.mongodb.com/) - NoSQL database

- [Postman](https://www.postman.com/) - API development environment

## Authors

- **Mert Sevinc** - [mertsevinc-dev](https://github.com/mertsevinc-dev)
