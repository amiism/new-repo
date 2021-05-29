const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    condition: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    availabiliy_status: {
      type: String,
      required: true
    },
    payment: {
      type: String,
      required: true
    },
    shipping: {
      type: String,
      required: true
    },
    updated_date: {
      type: Date,
      default: Date.now
    }
});

module.exports = Book = mongoose.model('book', BookSchema);