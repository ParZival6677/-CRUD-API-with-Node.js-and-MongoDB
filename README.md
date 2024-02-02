# CRUD-API-with-Node.js-and-MongoDB

This project is a simple CRUD API for a blogging platform built with Node.js and MongoDB. It provides basic functionalities to create, read, update, and delete blog posts. The API follows RESTful conventions and includes data validation and error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ParZival6677/-CRUD-API-with-Node.js-and-MongoDB.git
   ```
2. **Install Dependencies:**

   ```bash 
   npm install express express-validator mongoose dotenv
   ```
3. **Rename a .gitignore file to .env:**

   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/simple_blog
   ```
   ## Usage

1. **Start the node.js server:**

   ```bash
   node app.js
   ```

2. **Access the API:**

The API will be available at `http://localhost:3000/api/blogs`

## API Endpoints

- POST /api/blogs: Create a new blog post.
- GET /api/blogs: Retrieve all blog posts.
- GET /api/blogs/:id: Retrieve a single blog post by ID.
- PUT /api/blogs/:id: Update a blog post by ID.
- DELETE /api/blogs/:id: Delete a blog post by ID.

