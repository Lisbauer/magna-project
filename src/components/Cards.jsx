import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./cards.css";

const Cards = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="cards_superior">
      <div className="text_boxes">
        <h2 className="cards_tittle">{isEnglish ? "OUR WORLDS" : "NUESTROS MUNDOS"}</h2>
    
      <div className="container2">
        <div className="box2">
          <span></span>
          <div className="content">
            <h2>Data analytics & DCU</h2>
            <p>
              {isEnglish ? "We offer data analysis and customer management services that improve your business performance." : "Ofrecemos servicios de análisis de datos y gestión de clientes que mejoran el rendimiento de tu negocio."}
            </p>
          </div>
        </div>

        <div className="box2" >
          <span></span>
          <div className="content">
            <h2>UX UI & CX</h2>
            <p>
              {isEnglish ? "We focus on user experience, interface design and customer experience and create innovative and engaging digital solutions." : "Nos enfocamos en la experiencia del usuario, el diseño de interfazy la experiencia del cliente y creamos soluciones digitales innovadoras y atractivas."}
            </p>
          </div>
        </div>

        <div className="box2" >
          <span></span>
          <div className="content">
            <h2>Web 3.0</h2>
            <p>
              {isEnglish ? "We develop advanced and decentralized web solutions based on emerging technologies such as blockchain and artificial intelligence. always taking you to the future." : "Desarrollamos soluciones web avanzadas y descentralizadas basadas en tecnologías emergentes como blockchain y la inteligenciaartificial. llevándote al futuro siempre."}
            </p>
          </div>
        </div>

        <div className="box2" >
          <span></span>
          <div className="content">
            <h2>AI</h2>
            <p>
              {isEnglish ? "We give you customized AI solutions to help automate and improve complex business processes." : "Te damos soluciones de IA personalizadas para ayudar a automatizar y mejorar procesos empresariales complejos."}
            </p>
          </div>
        </div>

        <div className="box2" >
          <span></span>
          <div className="content">
            <h2>Blockchain</h2>
            <p>
               
              {isEnglish ? "We provide application development services and blockchain-based solutions to improve the security and transparency of business transactions." : "Proporcionamos servicios de desarrollo de aplicaciones y soluciones basadas en blockchain para mejorar la seguridad y transparencia de las transacciones empresariales."}
            </p>
          </div>
        </div>

        <div className="box2">
          <span></span>
          <div className="content">
            <h2>Apps iOS & Androidn</h2>
            <p>
              
              {isEnglish ? "We develop high-quality mobile applications for iOS and Android to improve the user experience and increase your company's online presence." : "Desarrollamos aplicaciones móviles de alta calidad para iOS y Android para mejorar la experiencia del usuario y aumentar la presencia en línea de tu empresa."}
            </p>
          </div>
        </div>
      </div></div>
    </div>
  );
};

export default Cards;
