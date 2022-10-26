import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
      <Link to="/" className="nav__link">
          <div className="nav__barLeft">
            Movies<span className="color">.io</span>
          </div>
          </Link>

        <div className="nav__barRight">
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/search" className="nav__link">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
