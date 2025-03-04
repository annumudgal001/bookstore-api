require('dotenv').config();
const express = require('express');
const connecttodb = require('./database/db.js');
const bookroutes = require('./routes/book-routes.js');

connecttodb();

const app = express();
const PORT=process.env.PORT;
  // Applying the routes to the '/api/books' endpoint.  This is a conventional way to define routes in Express.js.  '/api/books' is the base URL for the books API.  router is the imported router file.  This allows us to modularize our routes.  By having a separate file for routes, we can easily add or remove routes without having to update the main server file.

app.use(express.json());

app.use('/api/books', bookroutes);  // Mounting the book routes at '/api/books'.  This means that when a request comes in to the '/api/books' endpoint, it will be handled by the book routes.

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})