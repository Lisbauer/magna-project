import React, { useState } from "react";
import "./navbar.css";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="logo_li_container">
        <img className="logo_magna" src="./images/logo.png" alt="logo magna" />
        <ul className="ul_box">
          <li>
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
          <li>
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
          <li>          
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
          <li>
          <Link
              to="contacto"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
