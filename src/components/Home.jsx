import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import "./home.css";

const Home = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="home-bg">
      <div className="bg_text_btn">
        <div className="container_tittles">
          <h3 className="subtittle_home">{isEnglish ? "Technology from another " : "Tecnología de otra"}</h3>
          <h1 className="home_tittle">DIMENSEON</h1>
        </div>

        <div className="home_btn_container">
          <a className="home_btn" href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {isEnglish ? "Our worlds" : "Nuestros mundos"}
          </a>

          <a className="home_btn" href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {isEnglish ? "Contact us" : "Hacé contacto"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
