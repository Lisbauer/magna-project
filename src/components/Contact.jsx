import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nombre || !numero || !servicio || !mensaje) {
      setError(true);
      return;
    }

    const emailParams = {
      from_name: nombre,
      phone_number: numero,
      service: servicio,
      message: mensaje,
    };

    emailjs
      .send(
        "service_3h77yj4", // Reemplaza con tu SERVICE ID
        "template_7qfvucu", // Reemplaza con tu TEMPLATE ID
        emailParams,
        "c-8emIEBk9zCo1zHo" // Reemplaza con tu USER ID (PUBLIC KEY)
      )
      .then(
        (response) => {
          console.log("Correo electrónico enviado con éxito", response);
        },
        (error) => {
          console.error("Error al enviar el correo electrónico", error);
        }
      );
  };

  return (
    <div className="contact_container">
      <div className="contact_box" data-aos="fade-down">
        <form onSubmit={sendEmail}>
          <h2>Haz contacto</h2>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre completo"
            style={{ border: error && !nombre ? "red 1px solid" : "transparent" }}
          />
          <input
            type="text"
            name="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder="Número"
            style={{ border: error && !numero ? "red 1px solid" : "transparent" }}
          />
          <div>
            <select
              name="servicio"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              style={{ border: error && !servicio ? "red 1px solid" : "transparent" }}
            >
              <option value="" disabled defaultValue>
              Seleccione un servicio
              </option>
              <option value="Data analytics & DCU">Data analytics & DCU</option>
              <option value="UX UI & CX">UX UI & CX</option>
              <option value="Web 3.0">Web 3.0</option>
              <option value="AI">AI</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Apps iOS & Android">Apps iOS & Android</option>
            </select>
          </div>
          <textarea
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Mensaje"
            style={{ border: error && !mensaje ? "red 1px solid" : "transparent" }}
          ></textarea>
          <div>
          <input type="submit" value=" Enviar señales"/>     {error && <p style={{ color: "red", margin:"0",}}>Por favor complete todos los campos.</p>}</div>
        </form>
      </div>
      <div className="footer_btn">
        <input type="submit" value="Política de privacidad" />
        <input type="submit" value="Términos y condiciones" />
      </div>
      <p className="footer_p">© Magna Dimenseon. Todos los derechos reservados.</p>
      <div className="footer_container">
        <img className="logo_magna" src="../images/logo.png" alt="logo" />
        <div className="icons_box">
          <a
            href="https://www.facebook.com/magna.dimenseon"
            target="_blank"
            alt="facebook-icon"
          >
            <FontAwesomeIcon className="fonticonf" icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/magna.dimenseon/"
            target="_blank"
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
