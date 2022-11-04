import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
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
          <Link to="/favourites" className="nav__link">
            Favourites
          </Link>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
      </div>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times" />
        </button>

        <div className="menu__links" onClick={closeMenu}>
          <Link to="/">
            <div className="menu__link">Home</div>
          </Link>

          <Link to="/search" onClick={closeMenu}>
            <div className="menu__link">Search</div>
          </Link>

          <Link to="/favourites" onClick={closeMenu}>
            <div className="menu__link">Favourites</div>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
