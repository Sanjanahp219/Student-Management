# Student Management System

A full-stack web application for managing student records. The project is being developed using **React.js** for the frontend, **Java Servlets** for the backend, and **MySQL** for data storage.

The project is designed to understand how a frontend application communicates with a Java backend and database through REST APIs.

---

## Features

### Student Management

* Add new student records
* View all students
* View student details
* Edit student information
* Delete student records
* Search students
* Filter students

### Dashboard

* Total number of students
* Active students
* Course-wise student count
* Average marks
* Basic student statistics

### Future Features

* Authentication and authorization
* Role-based access
* Pagination
* Attendance management
* Course management
* Advanced analytics
* Export reports
* Spring Boot migration

---

## Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* React Router
* Axios

### Backend

* Java
* Java Servlets
* JDBC
* Apache Tomcat
* Maven
* REST APIs
* JSON

### Database

* MySQL
* MySQL Workbench

### Tools

* Visual Studio Code
* IntelliJ IDEA / Eclipse
* Postman
* Git
* GitHub

---

## System Architecture

```text
User
  ↓
React Frontend
  ↓
HTTP / JSON
  ↓
Java Servlet Backend
  ↓
Service Layer
  ↓
DAO Layer
  ↓
JDBC
  ↓
MySQL Database
```

---

## Project Structure

```text
StudentManagementSystem/
│
├── docs/
│   └── system-design.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── data/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   └── Java application
│
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Java JDK
* MySQL
* Apache Tomcat
* Git

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## Backend Setup

The Java backend will be configured using:

* Java
* Maven
* Apache Tomcat
* Java Servlets
* JDBC

Backend setup will be added as the backend development phase begins.

---

## Database Setup

The application will use MySQL.

Create the database:

```sql
CREATE DATABASE student_management;
```

Create the students table:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20),
    course VARCHAR(100),
    marks INT,
    status VARCHAR(30)
);
```

---

## API Endpoints

The backend will provide the following REST API endpoints:

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/students`      | Get all students  |
| GET    | `/api/students/{id}` | Get student by ID |
| POST   | `/api/students`      | Add a new student |
| PUT    | `/api/students/{id}` | Update a student  |
| DELETE | `/api/students/{id}` | Delete a student  |

---

## Application Flow

For example, when adding a student:

```text
Student Form
     ↓
React
     ↓
Axios
     ↓
Java Servlet
     ↓
Student Service
     ↓
Student DAO
     ↓
JDBC
     ↓
MySQL
```

The response then follows the reverse direction:

```text
MySQL
  ↓
JDBC
  ↓
DAO
  ↓
Service
  ↓
Servlet
  ↓
JSON Response
  ↓
React
  ↓
Updated UI
```

---

## Development Roadmap

* [x] Project planning
* [x] System design
* [ ] React project setup
* [ ] Application layout
* [ ] Navbar and Sidebar
* [ ] Dashboard
* [ ] Students page
* [ ] Student table
* [ ] Add student form
* [ ] Edit student
* [ ] Delete student
* [ ] Search and filtering
* [ ] Java Servlet backend
* [ ] JDBC configuration
* [ ] MySQL database
* [ ] REST API development
* [ ] Frontend-backend integration
* [ ] API testing with Postman
* [ ] Final testing
* [ ] GitHub documentation
* [ ] Deployment

---

## Learning Objectives

This project is being developed to understand:

* React component architecture
* React state management
* Form handling
* CRUD operations
* REST APIs
* HTTP methods
* Java Servlets
* Service and DAO layers
* JDBC
* SQL
* MySQL
* Frontend-backend communication
* API testing
* Git and GitHub

---

## Future Backend Migration

The initial backend is being developed using **Java Servlets and JDBC** to understand the fundamentals of Java web development.

The backend can later be migrated to **Spring Boot**:

```text
Current:

React
  ↓
Servlet
  ↓
Service
  ↓
DAO
  ↓
JDBC
  ↓
MySQL
```

Future:

```text
React
  ↓
Spring Boot REST API
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
JPA / Hibernate
  ↓
MySQL
```

---

## Project Status

**Status:** In Development

The project is currently being developed from the frontend and will later be integrated with the Java backend and MySQL database.

---

## Author

**Sanjana H P**

Full-Stack Developer | React.js + Java


