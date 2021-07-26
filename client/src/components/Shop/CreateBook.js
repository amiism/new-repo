import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import axios from "axios";

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      price: "",
      condition: "",
      description: "",
      availabiliy_status: "",
      payment: "",
      shipping: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      price: this.state.price,
      condition: this.state.condition,
      description: this.state.description,
      availabiliy_status: this.state.availabiliy_status,
      payment: this.state.payment,
      shipping: this.state.shipping,
    };

    axios
      .post("http://localhost:5000/api/books", data)
      .then((res) => {
        this.setState({
          title: "",
          price: "",
          condition: "",
          description: "",
          availabiliy_status: "",
          payment: "",
          shipping: "",
        });
        this.props.history.push("/shop");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  render() {
    return (
      <div className="CreateBook">
        <div>
          <div className="row">
            <div className="create-box">
              <p className="Shop-heading">What are you selling today?</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Condition"
                    name="condition"
                    className="form-control"
                    value={this.state.condition}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Availabiliy status"
                    name="availabiliy_status"
                    className="form-control"
                    value={this.state.availabiliy_status}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Preferred payment method"
                    name="payment"
                    className="form-control"
                    value={this.state.payment}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Preferred delivery method"
                    name="shipping"
                    className="form-control"
                    value={this.state.shipping}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="submit"
                  value="Add New Listing"
                />
                <div className="col-md-8 m-auto">
                  <br />
                  <Link to="/shop" className="button-return">
                    Return to Existing Listings
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
