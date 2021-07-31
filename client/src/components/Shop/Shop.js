import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateBook from "./CreateBook";
import DisplayBookList from "./DisplayBookList";
import DisplayBookDetails from "./DisplayBookDetails";
import UpdateBookForm from "./UpdateBookForm";

import "./Shop.css";

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <Router>
        <div>
          <Route exact path="/shop" component={DisplayBookList} />
          <Route path="/shop/create-book" component={CreateBook} />
          <Route path="/shop/edit-book/:id" component={UpdateBookForm} />
          <Route path="/shop/show-book/:id" component={DisplayBookDetails} />
        </div>
      </Router>
    </div>
  );
}

export default Shop;
