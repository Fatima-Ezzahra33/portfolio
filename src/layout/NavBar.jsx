import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", Label: "about" },
  { href: "#skills", Label: "skills" },
  { href: "#projects", Label: "projects" },
  { href: "#experience", Label: "experience" },
  { href: "#contact", Label: "contact" },
];
const NavBar = () => {
  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
  const [isScrolled,setIsScrolled]=useState(false);
  useEffect(
    ()=>{
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      }
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);
    },[]
  ) // this will run at the start of when the component is first rendered 
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3 " : "bg-transparent py-5"}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          FZ<span className="text-primary">.</span>
        </a>
        {/*Desktop navbar*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="rounded-full hover:text-primary px-4 py-2 text-sm text-muted-foreground hover:bg-surface"
              >
                {link.Label}
              </a>
            ))}
          </div>
        </div>
        <a href="/fzCv.pdf" download="CV-Abdessettar-Fatima-Ezzahra">
        <Button size="sm" classname="hidden md:block">
          Resume
        </Button>
        </a>
        {/*Mobile menu button*/}
        <button className="md:hidden p-2 text-foreground"
        onClick={()=>{
          setIsMobileMenuOpen((prev) => !prev);
        }}  
        >
          <i>
            {isMobileMenuOpen ? <X/> : <Menu />}
          </i>
        </button>
      </nav>
      {/*Mobile menu */}
      {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
          {navLinks.map((link, index) => (
            <a onClick={()=>setIsMobileMenuOpen(false)}
              key={index}
              href={link.href}
              className="text-lg text-muted-foreground hover:text-foreground py-2"
            >
              {link.Label}
            </a>
          ))}
          <a href="/fzCv.pdf" download="CV-Abdessettar-Fatima-Ezzahra">
          <Button size="default" classname="w-full">Resume </Button>
          </a>
        </div>
      </div>)}
    </header>
  );
};

export default NavBar;
