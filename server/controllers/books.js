const Book = require('../models/Book.js');

exports.testConnect = (req, res) => res.send('book route testing!');

exports.displayAllBooks = (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
};

exports.displayOneBook = (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
};

exports.createNewBook = (req, res) => {
    //Validate request
    if(!req.body.title){
        res.status(400).send({message: "Content cannot be empty"})
    }

    //create a book using save method
    /*
    const newBook = new Book({
        title: req.body.title,
        price: req.body.price,
        condition: req.body.price,
        description: req.body.description,
        availabiliy_status: req.body.availabiliy_status,
        payment: req.body.payment,
        shipping: req.body.shipping,
    }) 
    */

    //create the book using create mongoose create method
    Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));

};

exports.updateBook = (req, res) => {
    //Validate request
    if(!req.body){
        res.status(400).send({message: "Content to update cannot be empty"})
    }

    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
};

exports.deleteBook = (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
};

