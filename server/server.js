/* eslint-env node */
const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const books = require("./routes/api/books.js");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use("/api/books", books);

//to load the react app when upload to heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("APi running");
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
