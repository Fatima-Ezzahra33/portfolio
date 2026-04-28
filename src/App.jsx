import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/layout/NavBar.jsx";
import { Footer } from "@/layout/Footer.jsx";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Skills from "@/sections/Skills.jsx";
import Projects from "@/sections/Projects.jsx";
import Contact from "@/sections/Contact.jsx";
import Studies from "@/sections/Studies.jsx";
import AllProjects from "@/pages/AllProjects.jsx"; 

const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Studies />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;