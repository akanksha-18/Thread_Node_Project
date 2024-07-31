# Thread Clone

A thread clone application built using Node.js for the backend and React for the frontend. This project replicates the functionality of a thread-based discussion platform.

**Hosted Link:** https://thread-node-project.onrender.com
## Table of Contents

- [Overview]
- [Features]
- [Technologies Used]
- [Installation]
- [Configuration]
- [Running the Project]
- [API Endpoints]
- [Frontend]
- [License]

## Overview

This application is designed to mimic a thread-based discussion platform where users can create, view, and participate in threads. The backend is built with Node.js and Express, while the frontend is created using React.

## Features

- User authentication (login and signup)
- Creating, viewing, and managing threads
- Posting and managing messages within threads
- User profile management
- Real-time messaging using Socket.io
- File upload functionality using Cloudinary

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - MongoDB (with Mongoose)
  - Socket.io
  - Cloudinary
  - bcryptjs
  - jsonwebtoken
  - dotenv
  - cors
  - cookie-parser

- **Frontend:**
  - React
  - React Router
  - Axios
  - Socket.io-client

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Start the backend server:**

   ```bash
   cd backend
   npm run dev
3.  **Start the frontend server:**

   ```bash
   cd frontend
   npm run dev
## API Endpoints

### User Authentication:

- **POST /api/users/signup** - Sign up a new user
- **POST /api/users/login** - Log in a user

### Threads:

- **GET /api/threads** - Get all threads
- **POST /api/threads** - Create a new thread
- **GET /api/threads/:id** - Get a specific thread

### Messages:

- **POST /api/messages** - Post a new message
- **GET /api/messages/:threadId** - Get messages for a specific thread
![image](https://github.com/user-attachments/assets/129dd7f5-4f46-42aa-8a80-9297962152b8)
![image](https://github.com/user-attachments/assets/c78fca09-bd57-4cb9-b459-4217806e264b)
![image](https://github.com/user-attachments/assets/19300366-193a-41ca-8e75-cfb49274a20f)
![image](https://github.com/user-attachments/assets/5cd739ad-4e40-4e38-9c36-687a2853b997)
![image](https://github.com/user-attachments/assets/5e9fd98f-35b5-4da6-8095-369b9fffd234)

## License

This README file provides all the necessary commands and configuration details in Markdown format. Just replace placeholders with your actual project details.



