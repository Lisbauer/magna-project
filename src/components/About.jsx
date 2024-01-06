import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import "./about.css";

const About = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="about_container">     
    <img className="astro_alan" src="../images/alanonthemoon.png" alt="alan sobre la luna" />
        <div className="about_bg" data-aos="fade-down">
        <h2 className="about_tittle">{isEnglish ? "Magna Dimenseon Universe" : "Universo Magna Dimenseon"}</h2>
        <div className="about_box">
        <p>
          {isEnglish ? "We create personalized digital experiences connecting brands and people." : "Creamos experiencias digitales personalizadas conectando marcas y personas."}{" "}
        </p>
        <p>
          
          {isEnglish ? "We combine creativity and technology to overcome challenges and cosmic energy at the service of each project." : "Combinamos creatividad y tecnología para superar retos y energía cósmica al servicio de cada proyecto."}
          {" "}
        </p>
        <p>
          {isEnglish ? "Our strength lies in the passion with which we carry out each job, therefore, we immerse ourselves in the continuous search for excellence, obtaining effective, attractive results tailored to your needs." : "Nuestra fuerza radica en la pasión con la que realizamos cada trabajo,por ello, nos sumergimos en la búsqueda continua de la excelencia obteniendo resultados efectivos, atractivos y a la medida de tus necesidades."}
        </p>
        <a className='home_btn' href="" onClick={handleClick}>
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

export default About;
