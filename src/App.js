import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Cards/>
      <Contact/>
    </div>
  );
}

export default App;
