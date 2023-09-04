import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_box">
        <form>
          <h2>Haz contacto</h2>
          <input type="text" placeholder="Nombre completo" />
          <input type="text" placeholder="[Cod de área] + Número" />
          <input type="text" placeholder="Seleccione un servicio" />
          <textarea type="text" placeholder="Mensaje"></textarea>
          <input type="submit" value="Enviar señales" />
        </form>
      </div>
      <div className="footer_btn">
        <input type="submit" value="Politica de privacidad" />
        <input type="submit" value="Terminos y condiciones" />
      </div>       
      <p style={{color:"white"}}>© Magna Dimenseon. Todos los derechos reservados.</p>
      <div className="footer_container">
        <img className="logo_magna" src="../images/logo.png" alt="logo" />
 
        <div className="icons_box">
          <a
            href="https://www.facebook.com/magna.dimenseon"
            target="blank"
            alt="facebook-icon"
          >
            <FontAwesomeIcon className="fonticonf" icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/magna.dimenseon/"
            target="blank"
            alt="facebook-icon"
          >
            <FontAwesomeIcon className="fonticoni" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
