# Bookstore API

A RESTful API for managing books in a bookstore.

## Features

- Add, update, delete, and retrieve books.
- Search books by title, author, or year.
- Built with Node.js, Express, and MongoDB.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akshitmudgal001/bookstore-api.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/bookstore
     ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/books/get` - Get all books
- `POST /api/books/add` - Add a new book
- `GET /api/books/get/:id` - Get a book by ID
- `PUT /api/books/update/:id` - Update a book by ID
- `DELETE /api/books/delete/:id` - Deletebookbyid

  router.get("/get",getallbooks)
  router.get("/get/:id",getsinglebookbyid)
  router.post("/add",addnewbook)
  router.put("/update/:id",updatesinglebook)
  router.delete("/delete/:id",deletebook)

## Technologies Used

- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- Dotenv (Environment variables)

## License

This project is licensed under the MIT License.
