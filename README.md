# Build Own API

This project is a custom API built using Node.js, Express, and MySQL. It enables users to perform CRUD operations (Create, Read, Update, Delete) on a database through various endpoints. The API follows REST principles and is designed to be simple yet scalable for various use cases.

## Features

- **User Management**: Create, update, delete, and retrieve user information.
- **CRUD Operations**: Perform standard operations on the database.
- **Database Integration**: MySQL is used as the database, with Sequelize for database abstraction.
- **Security**: Implemented basic security measures such as environment variables for sensitive data.

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express**: Web framework for Node.js
- **MySQL**: Relational database
- **Sequelize**: ORM for MySQL
- **dotenv**: For environment variable management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MandiSolone/Build_Own_API.git
   cd Build_Own_API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with the necessary environment variables:
   ```
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | `/users` | Get all users |
| GET    | `/users/:id` | Get user by ID |
| POST   | `/users` | Create a new user |
| PUT    | `/users/:id` | Update a user by ID |
| DELETE | `/users/:id` | Delete a user by ID |

## License

This project is open-source and available under the [MIT License](LICENSE).

