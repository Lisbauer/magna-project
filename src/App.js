import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import "./components/fonts.css";
import Rocket from "./components/Rocket";

function App() {
  return (
    <div className="App">
      <div className="navbar_home">
      <div id="navbar">
      <Navbar />
      </div>
      <div id="home">
        <Home />
      </div>
      </div>
      <div className="toTop">
        <Rocket />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="servicios">
        <Cards />
      </div>
      <div id="contacto">
        <Contact />
      </div>
    </div>
  );
}

export default App;
