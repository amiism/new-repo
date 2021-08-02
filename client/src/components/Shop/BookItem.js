import React, { Component } from "react";

class BookItem extends Component {
  render() {
    const { book } = this.props;
    console.log(book);
    return (
      <div>
        <table
          className="table table-hover table-dark"
          style={{ margin: "auto" }}
        >
          <tbody>
            <tr>
              <td>Title</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>{book.condition}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{book.price}</td>
            </tr>
            <tr>
              <td>Availabiliy Status</td>
              <td>{book.availabiliy_status}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{book.description}</td>
            </tr>
            <tr>
              <td>Preferred Payment Method</td>
              <td>{book.payment}</td>
            </tr>
            <tr>
              <td>Preferred Shipping Method</td>
              <td>{book.shipping}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookItem;
