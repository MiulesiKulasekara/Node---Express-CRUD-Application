# Node---Express-CRUD-Application

This is a simple crud application using node js and express js. This application is for the management of students' details. Using this we can perform adding, viewing all data, Viewing specific data, updating data, and deleting data of students. There is no any frontend.  This app consists of the backend only.


## Tech Stack

**Server:** Node, Express

## Features

- Add a student
- View all students
- View specific student
- Update a students
- Delete a student
   
## Run Locally

Clone the project

```bash
  git clone https://github.com/MiulesiKulasekara/Node---Express-CRUD-Application.git
```

Go to the project directory

```bash
  cd Node---Express-CRUD-Application
```

Install dependencies

```bash
  npm install
```

Setup Mongo DB using <a href="https://www.mongodb.com/">mongodb.com</a>
 
Start the server

```bash
  npm run start
```

## API Reference

<p>Check APIs using Postman</p>

### Get all students

```http
  GET /api/students
```

### Get a student

```http
  GET /api/students/:id
```

### Add a student

```http
  POST /api/students
```

### Update a student

```http
  PATCH /api/students
```

### Update a student

```http
  DELETE /api/students
```


