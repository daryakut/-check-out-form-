// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import user from "../../assets/user.svg";
import search from "../../assets/search.svg";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
              <li
                className={
                  windowWidth <= 768 ? classes.hidden : classes.visible
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  windowWidth <= 768 ? classes.hidden : classes.visible
                }
              >
                <Link to="/shop">Shop</Link>
              </li>
              <li
                className={
                  windowWidth <= 768 ? classes.hidden : classes.visible
                }
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  windowWidth <= 768 ? classes.hidden : classes.visible
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.actions}>
          <a href="#">
            <img src={user} alt="user" />
          </a>
          <a href="#">
            <img
              src={search}
              alt="search"
              className={windowWidth <= 768 ? classes.hidden : classes.visible}
            />
          </a>
          <a href="#">
            <img
              src={heart}
              alt="heart"
              className={windowWidth <= 768 ? classes.hidden : classes.visible}
            />
          </a>
          <a href="#">
            <img
              src={cart}
              alt="cart"
              className={windowWidth <= 768 ? classes.hidden : classes.visible}
            />
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
