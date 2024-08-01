import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Services from "./components/Services/Services";
import About from "./pages/About/About";
import OurTeam from "./pages/OurTeam/OurTeam";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
