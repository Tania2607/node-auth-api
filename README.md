
# 🚀 Node.js Authentication API

A robust and secure authentication API built with **Node.js**, **Express**, and **MongoDB**. This backend service provides user registration, login, and profile management, leveraging modern security practices such as JWT-based authentication and password hashing.

---

## 🔑 Features

- ✅ User Registration (Signup)
- ✅ User Login
- ✅ User Profile Management
- ✅ Secure JWT Authentication
- ✅ Password Hashing with **bcrypt**
- ✅ Input Validation
- ✅ RESTful API Endpoints

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn

---

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd node-api
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run at: **`http://localhost:3000`**

---

## 📡 API Endpoints

### 🔐 Authentication

- `POST /api/auth/register` — Register a new user  
- `POST /api/auth/login` — Authenticate and log in a user

### 👥 User Management

- `GET /api/users` — Get all users (Admin only)
- `GET /api/users/:id` — Get a user by ID
- `PUT /api/users/:id` — Update a user's profile

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT** (JSON Web Tokens)
- **bcrypt** (Password Hashing)
- **CORS**
- **dotenv**

---

## 🔒 Security Highlights

- 🔐 Passwords hashed using **bcrypt**
- 🛡️ JWT-based session management
- 🧼 Validated and sanitized user input
- 📁 Environment-based configuration for sensitive data

---

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork** this repository
2. **Create a branch** for your feature or fix:  
   `git checkout -b feature/your-feature-name`
3. **Commit** your changes:  
   `git commit -m "Add your message here"`
4. **Push** to your branch:  
   `git push origin feature/your-feature-name`
5. **Create a Pull Request**

---

