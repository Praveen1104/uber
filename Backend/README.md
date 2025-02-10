# API Documentation

## /users/register

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Method
`POST`

### Endpoint
`/users/register`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
Responses
Success (201 Created)
Description: User registered successfully.
Body: A JSON object containing the authentication token and user details.
Example:

{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
Client Error (400 Bad Request)
Description: Validation failed for the input data.
Body: A JSON object containing the validation errors.
Example:
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
rror Handling
If any required field is missing or invalid, a 400 Bad Request status code is returned with the validation errors.
If the user creation fails for any other reason, an appropriate error message is returned.
Example Request
curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
Example Response

{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

/users/login
Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details.

Method
POST

Endpoint
/users/login

Request Body
The request body should be a JSON object with the following fields:

email: A string representing a valid email address (required)
password: A string with a minimum length of 6 characters (required)
Example:
{
  "email": "john.doe@example.com",
  "password": "password123"
}

Responses
Success (200 OK)
Description: User logged in successfully.
Body: A JSON object containing the authentication token and user details.
Example:
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

Client Error (400 Bad Request)
Description: Validation failed for the input data.
Body: A JSON object containing the validation errors.
Example:

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

Client Error (401 Unauthorized)
Description: Invalid email or password.
Body: A JSON object containing the error message.
Example:
{
  "message": "Invalid email or password"
}

Error Handling
If any required field is missing or invalid, a 400 Bad Request status code is returned with the validation errors.
If the email or password is incorrect, a 401 Unauthorized status code is returned with an appropriate error message.
Example Request

curl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'

Example Response
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}