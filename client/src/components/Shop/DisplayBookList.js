import React, { Component } from 'react';
import './Shop.css';
import { connect } from "react-redux";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './Book';
import { Button } from '@material-ui/core';
import {getBooks} from '../../actions/books';

class DisplayBookList extends Component {
  
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.getBooks();
    /*
    axios
      .get('/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
        console.log('data fetched');
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
    */
  };

  render() {

    //const books = this.state.books;
    console.log("PrintBook: " + this.props.books);
    let bookList;
    
    if(!this.props.books.length) {
      bookList = "there is no book being sold!, start by sell ur textbks/notes here!";
      console.log("no books");
    } else {
      bookList = this.props.books.map((book, k) =>
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

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, {
  getBooks,
})(DisplayBookList);