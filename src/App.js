import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import Home from "./pages/Homepage";
import About from "./pages/AboutPage";
import WhyKorea from "./pages/WhyKorea";
import VisaPrograms from "./pages/VisaPrograms";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-korea" element={<WhyKorea />} />
          <Route path="/visa-programs" element={<VisaPrograms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>THIS PAGE DOESN'T EXIST</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
