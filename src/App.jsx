import React from "react";
import NavBar from "@/layout/NavBar.jsx";
import {Footer} from "@/layout/Footer.jsx";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Skills from "@/sections/Skills.jsx";
import Projects from "@/sections/Projects.jsx";
import Contact from "@/sections/Contact.jsx";
import Studies from "@/sections/Studies.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Studies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
