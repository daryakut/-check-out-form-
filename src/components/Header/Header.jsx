// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import user from "../../assets/user.svg";
import search from "../../assets/search.svg";

const Header = () => {
  return (
    <>
      <div className={classes.header__container}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <span>Furniro</span>
        </div>
        <div className={classes.menu}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.actions}>
          <img src={user} alt="user" />
          <img src={search} alt="search" />
          <img src={heart} alt="heart" />
          <img src={cart} alt="cart" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
