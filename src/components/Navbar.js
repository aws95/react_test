import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shopping Cart
        </Link>
        <ul className="right">
          <li className="waves-effect waves-light">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
