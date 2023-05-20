// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// CONFIG/MIDDLEWARE
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

// MONGOOSE
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected")) // This will tell us if we are connected to the DB in our terminal.
  .catch((err) => console.error(err));

// ROOT INDEX
app.get("/", (req, res) => {
  res.send("Hello World");
});

// BOOKS
const booksController = require("./Controllers/books_controller");
app.use("/books", booksController);

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
