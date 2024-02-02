# CRUD-API-with-Node.js-and-MongoDB

This project is a simple CRUD API for a blogging platform built with Node.js and MongoDB. It provides basic functionalities to create, read, update, and delete blog posts. The API follows RESTful conventions and includes data validation, error handling, and optional testing capabilities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## PREREQUISITES

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## INSTALLATION

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-project.git

2. **Install Dependencies:**

`npm install express express-validator mongoose dotenv`

3. **Rename a .gitignore file to .env:**

`PORT=3000
MONGODB_URI=mongodb://localhost:27017/blogDB`

## USAGE

1. **Start the node.js server:**

`node app.js`

2. **Access the API:**

The API will be available at `http://localhost:3000/api/blogs`

## API ENDPOINTS 

- POST /api/blogs: Create a new blog post.
- GET /api/blogs: Retrieve all blog posts.
- GET /api/blogs/:id: Retrieve a single blog post by ID.
- PUT /api/blogs/:id: Update a blog post by ID.
- DELETE /api/blogs/:id: Delete a blog post by ID.

