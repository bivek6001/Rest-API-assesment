REST API Assessment - Valor Solution (OPC), Bangalore
This project is developed as part of my assessment for an internship opportunity at Valor Solution (OPC), Bangalore. It demonstrates a RESTful API built using Node.js and MongoDB, showcasing skills in back-end development, database management, and cloud integration.

Table of Contents
Features
Technologies
Installation
Environment Variables
API Endpoints



Future Enhancements
Contact
Features
User Registration: Secure user registration with hashed passwords.
Authentication: User login with token-based authentication (JWT).
CRUD Operations: Basic CRUD operations for managing users.
Role-based Access Control: API access is restricted based on user roles.
Error Handling: Proper error messages and status codes for different scenarios.
Technologies Used
Node.js with Express.js for back-end development.
MongoDB (NoSQL) as the database for storing user information.
JWT for secure token-based authentication.
bcrypt for password hashing.

Installation
Prerequisites
Node.js (version 14 or higher)
MongoDB (either local or cloud, e.g., MongoDB Atlas)
npm (Node Package Manager)
Instructions
Clone the repository to your local machine:


Copy code
git clone https://github.com/bivek6001/Rest-API-assesment.git 
cd rest-api-assessment
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the root directory with the following environment variables:
bash
Copy code
MONGO_URI=mongodb://localhost:27017/restAPI
JWT_SECRET="secret"
PORT=9000


Run the application:
npm run start
The application will be running at http://localhost:9000.



Running in Development Mode
To run the application with automatic reloads (using nodemon):
npm run dev



Environment Variables
Ensure you configure the following variables in your .env file:

MONGO_URI: mongodb://localhost:27017/restAPI
JWT_SECRET: "secret"
PORT: 9000


For any questions or clarifications, feel free to contact me:

Email: biveksingha.dev@gmail.com

