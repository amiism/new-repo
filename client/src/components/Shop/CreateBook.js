import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Shop.css';
import axios from 'axios';
import {createBook} from '../../actions/books';

class CreateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      price:'', 
      condition:'', 
      description:'', 
      availabiliy_status:'', 
      payment:'', 
      shipping:''
    };
  }

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

    this.props.createBook(data)
    .then((recvdata)=>{
      console.log(recvdata);
      this.props.history.push('/shop');
    })
    .catch((e)=>{
      console.log(e);
    });

    /*
    axios
      .post('http://localhost:5000/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          price:'',
          condition:'',
          description:'',
          availabiliy_status:'',
          payment:'',
          shipping:''
        })
        this.props.history.push('/shop');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
      */
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/shop" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
              <br />
            </div>
            
            <div className="col-md-8 m-auto">
              <p className="lead text-center">
                  Create new book
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='number'
                    placeholder='PRICE'
                    name='price'
                    className='form-control'
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='CONDITION'
                    name='condition'
                    className='form-control'
                    value={this.state.condition}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='PAYMENT'
                    name='payment'
                    className='form-control'
                    value={this.state.payment}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Shipping'
                    name='shipping'
                    className='form-control'
                    value={this.state.shipping}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {createBook})(CreateBook);