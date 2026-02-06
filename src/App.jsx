import React from 'react'
import NavBar from '@/layout/NavBar.jsx'
import Hero from '@/sections/Hero.jsx'
import About from '@/sections/About.jsx'
import Skills from '@/sections/Skills.jsx'
import Projects from '@/sections/Projects.jsx'
import Contact from '@/sections/Contact.jsx'
import Experience from '@/sections/Experience'




function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar/>
      <main>
        {/*i should fix it tomorrow inshallah!*/}
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
