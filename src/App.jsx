import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Games from "./Components/Games";
import DropDownNav from "./Components/DropDownNav";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Navbar>
        <DropDownNav />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/dropper" element={<DropDownNav />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
