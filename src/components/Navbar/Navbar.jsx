import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo_new.png";
import cart from "../Assets/cr.png";
import { Link } from "react-router-dom";
import nav_dropdown from "../Assets/dropdown_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div>
        <img style={{ height: "70px" }} src={logo} alt="" />
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none", color:'black' }} to="/">
            Home
          </Link>
          {menu === "home" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ourguide");
          }}
        >
          <Link style={{ textDecoration: "none", color:'black' }} to="/ourguide">
            Our Guide
          </Link>
          {menu === "ourguide" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("aboutus");
          }}
        >
          <Link style={{ textDecoration: "none", color:'black' }} to="/about">
            About
          </Link>
          {menu === "about" ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mycart");
          }}
        >
          <Link style={{ textDecoration: "none", color:'black' }} to="/cart">
            My Cart
          </Link>
          {menu === "cart" ? <h /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/Cart">
          <img style={{ height: "30px" }} src={cart} alt="" />
        </Link>
        {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
      </div>
    </div>
  );
};

export default Navbar;
