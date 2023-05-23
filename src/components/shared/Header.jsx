import React from "react"
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__logo">
        <Link to="/" className="header__title">
          <img className="header__logo" src="e-commerce.png" alt="" />
        </Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__items">
            <Link to="/login" className="header__item-link">
              Login
            </Link>
          </li>
          <li className="header__items">
            <Link to="/register" className="header__item-link">
              Register
            </Link>
          </li>
          <li className="header__items">
            <Link to="/purchases" className="header__item-link">
              Purchases
            </Link>
          </li>
          <li className="header__items ">
            <Link to="/cart">
              <i className="bx bx-cart bx-btn"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
