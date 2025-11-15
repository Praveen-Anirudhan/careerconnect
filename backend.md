# Job Portal Backend

A backend service for a job portal platform where recruiters can sign up, log in, and create job listings. Candidates can view jobs publicly without authentication.

Built using Node.js, Express, and MongoDB.

## 🔧 Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Authentication:** JWT, bcrypt
- **Utilities:** dotenv, cors, nodemon

## 📌 Features

- Recruiter registration & login
- JWT-based authentication
- Create, update, delete job posts (recruiters only)
- Public job listing for candidates
- Recruiter dashboard API to view jobs created by them

## 📁 Project Structure

```
src/
  config/
    db.js
  controllers/
    authController.js
    jobController.js
  middleware/
    authMiddleware.js
  models/
    User.js
    Job.js
  routes/
    authRoutes.js
    jobRoutes.js
  app.js
server.js
```

## 🔐 Authentication Flow

- Passwords are hashed using bcrypt
- On login, a JWT is generated and returned
- Protected routes use a middleware that verifies the token
- Only authenticated recruiters can manage jobs

## 🚀 API Endpoints

### Auth

#### Register
**POST** `/auth/register`

**Body:**
```json
{
  "name": "John",
  "email": "john@mail.com",
  "password": "secret123"
}
```

#### Login
**POST** `/auth/login`

**Body:**
```json
{
  "email": "john@mail.com",
  "password": "secret123"
}
```

**Returns:**
```json
{
  "token": "jwt_token_here"
}
```

### Jobs

#### Create a job (Protected)
**POST** `/jobs`

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "title": "Frontend Developer",
  "description": "React experience needed",
  "salary": "10 LPA",
  "location": "Remote"
}
```

#### Get all jobs (Public)
**GET** `/jobs`

#### Get jobs created by the logged-in recruiter
**GET** `/jobs/my`

**Headers:**
```
Authorization: Bearer <token>
```

#### Update job (Protected)
**PUT** `/jobs/:id`

**Headers:**
```
Authorization: Bearer <token>
```

#### Delete job (Protected)
**DELETE** `/jobs/:id`

**Headers:**
```
Authorization: Bearer <token>
```

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URL=mongodb_connection_string
JWT_SECRET=your_secret_key
```

## ▶️ Running the Project

**Install dependencies:**
```bash
npm install
```

**Run in development:**
```bash
npm run dev
```

**Server runs on:**
```
http://localhost:5000
```

## 📒 Summary

This backend provides:

- Secure authentication
- Recruiter-only job management
- Public job listing for candidates
- Clean modular code with routes/controllers/middleware separation
