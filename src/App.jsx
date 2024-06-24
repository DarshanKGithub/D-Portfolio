import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Heading from "./components/Heading";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-screen bg-[#03001C] overflow-auto">
      <Navbar scrollToContact={scrollToContact} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SocialMedia />
              <Heading />
              <Contact ref={contactRef} />
            </div>
          }
        />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" component={<Resume/>} />
      </Routes>
    </div>
  );
}

export default App;
