import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_container">     
    <div></div> 
    <img className="astro_alan" src="../images/alanonthemoon.png" alt="alan sobre la luna" />
        <div className="about_bg" data-aos="fade-down">
        <h2 className="about_tittle">Universo Magna Dimenseon</h2>
        <div className="about_box">
        <p>
          Creamos experiencias digitales personalizadas conectando marcas y
          personas.{" "}
        </p>
        <p>
          Combinamos creatividad y tecnología para superar retos y alcanzar
          metas diseñando arquitecturas precisas y a medida, poniendo nuestra
          energía cósmica al servicio de cada proyecto.{" "}
        </p>
        <p>
          Nuestra fuerza radica en la pasión con la que realizamos cada trabajo,
          por ello, nos sumergimos en la búsqueda continua de la excelencia
          obteniendo resultados efectivos, atractivos y a la medida de tus
          necesidades.
        </p>
        <a className='home_btn' href="" data-aos="flip-left">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Hacé contacto
        </a>
      </div>
      </div>

    </div>
  );
};

export default About;
