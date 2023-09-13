import React, { useState } from "react";
import "./navbar.css";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="logo_li_container">
        <img className="logo_magna" src="./images/logo.png" alt="logo magna" />

        <div className="burger-link-container">
          <button
            className={`burger-btn ${isMenuOpen ? "active" : ""}`}
            onClick={handleMenuClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <div className={`box-links ${isMenuOpen ? "active" : ""}`}> 
        <ul className="ul_box">
          <li className="menu_btn">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleLinkClick}
            >
              Home
            </Link>
    
          </li>
          <li className="menu_btn">
          <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleLinkClick}
            >
              Quiénes somos
            </Link>
          </li>
          <li className="menu_btn">          
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleLinkClick}
            >
             Servicios
            </Link>
          </li>
          <li className="contact_btn">
          <Link
              to="contacto"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleLinkClick}
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              Contacto
            </Link>
          </li>
        </ul>
        </div></div>
      </div>
    </div>
  );
};

export default Navbar;
