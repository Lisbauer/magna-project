import React, { useState, useContext } from "react";
import "./navbar.css";
import { Link, animateScroll } from "react-scroll";
import { LanguageContext } from "./LanguageContext";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    
  };
  const handleLanguageClick = (language) => {
    if ((language === "en" && !isEnglish) || (language === "es" && isEnglish)) {
      toggleLanguage();
    }
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
              {isEnglish ? "Home" : "Inicio"}
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
              {isEnglish ? "About us" : "Quiénes somos"}
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
              {isEnglish ? "Services" : "Servicios"}
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
              {isEnglish ? "Contact" : "Contacto"}
            </Link>
          </li>
          <div className="language-container">
            <h3
       className={`languageEn ${isEnglish ? "active" : ""}`}
       onClick={() => handleLanguageClick("en")}
       disabled={isEnglish}
            >
              EN
            </h3>
            <span style={{color: "white"}}>/</span>
            <h3
        className={`languageEs ${isEnglish ? "" : "active"}`}
        onClick={() => handleLanguageClick("es")}
        disabled={!isEnglish}v
            >
              ES
            </h3>
          </div>
        </ul>
        </div></div>
      </div>
    </div>
  );
};

export default Navbar;
