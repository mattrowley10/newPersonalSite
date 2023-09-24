import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Games from "./Components/Games";
import DropDownNav from "./Components/DropDownNav";
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ParticlesDiv from "./Components/ParticlesDiv";

function App() {
  return (
    <Router>
      <Navbar>
        <DropDownNav />
      </Navbar>
      <ParticlesDiv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/dropper" element={<DropDownNav />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
