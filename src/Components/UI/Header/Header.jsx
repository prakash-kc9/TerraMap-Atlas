import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import Second from "../../../assets/Logo/Second.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="grid navbar-grid">

          {/* Logo Section */}
          <div className="Logo">
            <NavLink to="/">
              <img src={Second} alt="TerraMap Logo" className="logo-img" />
            </NavLink>
          </div>

          {/* Navigation Menu */}
          <nav className={isOpen ? "nav active" : "nav"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon */}
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;