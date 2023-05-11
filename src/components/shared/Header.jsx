import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__logo">
        <Link to="/" className="header__title">
          e-commerce
        </Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__items">
            <Link to="/login">
              <i className="bx bx-user"></i>
            </Link>
          </li>
          <li className="header__items">
            <Link to="/register">
              <i className="bx bx-user-plus"></i>
            </Link>
          </li>
          <li className="header__items">
            <Link to="/purchases">
              <i className="bx bx-shopping-bag"></i>
            </Link>
          </li>
          <li className="header__items ">
            <Link to="/cart">
              <i className="bx bx-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
