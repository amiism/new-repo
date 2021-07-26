import React from "react";
import "./MainNavBar.css";
import { Link } from "react-router-dom";

function MainNavBar() {
  return (
    <div className="overall-mainnav">
      <mainnav>
        <ul className="mainnav-links">
          <Link style={{ textDecoration: "none" }} to="/forum">
            <li>Forum</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/shop">
            <li>Shop</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/job">
            <li>Jobs</li>
          </Link>
        </ul>
      </mainnav>
    </div>
  );
}

export default MainNavBar;
