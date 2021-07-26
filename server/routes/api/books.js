const books = require("../../controllers/books.js");
var router = require("express").Router();

module.exports = app => {
        
    router.get("/testbook", books.testConnect);
    router.get("/", books.displayAllBooks);
    router.get("/:id", books.displayOneBook);
    router.post("/", books.createNewBook);
    router.put("/:id", books.updateBook);
    router.delete("/:id", books.deleteBook);
    app.use("/api/books", router);
};