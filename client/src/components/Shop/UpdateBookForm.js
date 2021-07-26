import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Shop.css';
import { getOneBook, updateBook } from '../../actions/books';

class UpdateBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      condition: '',
      description: '',
      availabiliy_status: '',
      payment: '',
      shipping:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    const { id } = this.props.match.params;
    
    if(!this.props.book){
      this.props.getOneBook(id);
      console.log('book contain '+this.props.book);
    }
    
    //console.log('update book has '+ this.props.book);
    
    this.setState({
      title: this.props.book.title,
      price: this.props.book.price,
      condition: this.props.book.condition,
      description: this.props.book.description,
      availabiliy_status: this.props.book.availabiliy_status,
      payment: this.props.book.payment,
      shipping: this.props.book.shipping
    });
    
    /*
    axios
      .get('http://localhost:5000/api/books/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          
        })
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
    */ 
  };

  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      price: this.state.price,
      condition: this.state.condition,
      description: this.state.description,
      availabiliy_status: this.state.availabiliy_status,
      payment: this.state.payment,
      shipping: this.state.shipping
    };
    console.log('title change' + this.state.title);

    this.props.updateBook(this.props.match.params.id, data)
    .then(res => {
      this.props.history.push('/shop/show-book/' + this.props.match.params.id);
    });
    /*
    axios
      .put('http://localhost:5000/api/books/'+ )
      .then(res => {
        this.props.history.push('/shop/show-book/' + this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
      */
      
  };
  
  render() {
    if(!this.props.book){
      return (<div><h2>loading</h2></div>);
    }
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/shop" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="price">PRICE</label>
              <input
                type='number'
                placeholder='price'
                name='price'
                className='form-control'
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="condition">condition</label>
              <input
                type='text'
                placeholder='Author'
                name='condition'
                className='form-control'
                value={this.state.condition}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="availabiliy_status">availabiliy_status</label>
              <input
                type='text'
                placeholder='availabiliy_status'
                name='availabiliy_status'
                className='form-control'
                value={this.state.availabiliy_status}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="payment">Payment</label>
              <input
                type='text'
                placeholder='Payment'
                name='payment'
                className='form-control'
                value={this.state.payment}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="shipping">Shipping</label>
              <input
                type='text'
                placeholder='Shipping'
                name='shipping'
                className='form-control'
                value={this.state.shipping}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps({books}, ownProps) {
  return {     
    book: books[ownProps.match.params.id],
  };
}

export default connect(mapStateToProps, { 
  getOneBook,updateBook 
})(UpdateBookForm);