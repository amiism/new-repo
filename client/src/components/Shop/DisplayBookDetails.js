// when user clicks to view each individual book
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './Shop.css';
import axios from 'axios';


class DisplayBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/books/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/api/books/'+id)
      .then(res => {
        this.props.history.push("/shop");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {
    const book = this.state.book;
    let BookItem = <div>
      <table className="table table-hover table-dark"  style={{margin:'auto'}}>
        <tbody>
          <tr>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <td>Condition</td>
            <td>{ book.condition }</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{ book.price }</td>
          </tr>
          <tr>
            <td>availabiliy_status</td>
            <td>{ book.availabiliy_status }</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{ book.description }</td>
          </tr>
          <tr>
            <td>payment</td>
            <td>{ book.payment }</td>
          </tr>
          <tr>
            <td>shipping</td>
            <td>{ book.shipping }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="DisplayBookDetails">
        <div>
          <Link to="/shop" className="btn btn-outline-warning float-left">
            Show Book List
          </Link>
        </div>
        <div style={{margin:'auto'}}>
          { BookItem }
        </div>
        <div className="btn-row">      
          <Button type="button" className="btn btn-outline-danger btn-lg btn-block" 
            onClick={this.onDeleteClick.bind(this,book._id)}>
              Delete Book</Button>
          <Button>
            <Link to={`/shop/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block" 
              style={{ textDecoration: 'none' }}>
              Edit Book
            </Link>
          </Button>
        </div>  
      </div>
    );
  }
}

export default DisplayBookDetails;