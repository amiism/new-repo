import React, { Component } from 'react';
import './Shop.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './Book';
import { Button } from '@material-ui/core';

class DisplayBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };

  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    
    if(!books.length) {
      bookList = "there is no book being sold!, start by sell ur textbks/notes here!";
      console.log("no books");
    } else {
      bookList = books.map((book, k) =>
        <Book book={book} key={k} />
      );
    }
    
    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-11">
              <Button>
                <Link to="/shop/create-book" className="btn btn-outline-warning float-right">
                  + Add New Book
                </Link>
              </Button>
            </div>

          </div>

          <div className="list">
            {bookList} 
          </div>
        </div>
      </div>
      
    );
  }
}

export default DisplayBookList;