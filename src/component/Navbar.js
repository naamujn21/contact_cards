import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar shadow fixed top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Contact Book
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
