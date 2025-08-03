# Node.js Authentication API

A secure authentication API built with Node.js, Express, and MongoDB for user management and authentication.

## Features

- User Registration (Signup)
- User Login
- User Profile Management
- JWT Authentication
- Password Hashing (bcrypt)
- Input Validation
- RESTful API Endpoints

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd node-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login existing user

### User Management

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user profile

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt (Password hashing)
- CORS
- dotenv

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Input validation
- Secure API endpoints
- Environment-based configuration

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

ISC License
