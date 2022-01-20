
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="service" element={<Service />} />
        <Route exact path="contact" element={<Contact />} />
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;