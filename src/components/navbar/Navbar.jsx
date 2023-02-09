import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/Logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <nav>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#MENU">MENU</a>
            </li>
            <li>
              <a href="/booking">RESERVATIONS</a>
            </li>
            <li>
              <a href="#OR">ORDER ONLINE</a>
            </li>
            <li>
              <a href="#Login">LOGIN</a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
