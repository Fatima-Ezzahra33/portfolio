import React from "react";
import Button from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
} from "lucide-react";

function Hero() {
  const skills = [
    // Languages
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "PHP",
    "C++",

    // Frontend
    "React",
    "Vue.js",
    "Tailwind CSS",
    "Vitest",
    "Cypress",

    // Backend
    "Spring Boot",
    "Laravel",
    "Express.js",

    // Databases
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "MongoDB",

    // DevOps & Tools
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "GitLab CI",

    // Data & AI
    "SQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "XGBoost",
    "SHAP",
  ];

  return (
    <section id="hero">
      {/*Bg*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40 "
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/*Floating dots*/}
      <div className="absolute overflow-hidden pointer-events-none inset-0 ">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 "
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/*Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/*left col - text and description*/}
          <div className="space-y-8 ">
            <div className="animate-fade-in animate-delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                Software Engineering student
              </span>
            </div>
            {/*Headline*/}
            <div className="space-y-4">
              <h1 className=" text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animate-delay-200 ">
                Crafting <span className="glow-text text-primary">Digital</span>
                <br />
                Experiences with
                <br />
                <span className="font-serif italic font-normal text-white ">
                  precision.
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animate-delay-300">
                I’m a passionate full-stack developer who loves turning ideas
                into functional, user-friendly web applications. I specialize in
                building responsive interfaces and robust backend systems,
                bridging the gap between design and functionality. I enjoy
                tackling challenges, learning new technologies, and creating
                solutions that make a real impact.
              </p>
            </div>
            {/*call to action*/}
            <div className="flex flex-wrap md:flex-row gap-4 animate-fade-in animation-delay-400">
              <Button size="lg">
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/fzCv.pdf" download="CV-Abdessettar-Fatima-Ezzahra">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/*Social links*/}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/Fatima-Ezzahra33" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/fatima-ezzahra-65a5543a1/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-100"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/*right col -profile picture*/}
          {/* right col - profile picture */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Blurred background glow */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse z-0" />

              {/* Image container (NOT blurred) */}
              <div className="relative glass rounded-4xl p-2 glow-border z-10">
                <img
                  src="/portfolio3.png"
                  alt="Abdessettar Fatima-Ezzahra"
                  className="w-full aspect-4/5 object-cover rounded-3xl"
                />
                {/*floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Looking for an internship
                    </span>
                  </div>
                </div>
                {/*stats badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">Full stack & AI </div>
                  <div className="text-md text-muted-foreground">
                    learning and building everyday
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*skills section*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4 ">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-10 sm:mb-5 md:mb-0 animate-fade-in animation-delay-600">
        <span className="text-xl text-muted-foreground animate-pulse ">SCROLL</span>
        <a href="#about">
          <ChevronDown className="animate-pulse h-10 w-10 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
