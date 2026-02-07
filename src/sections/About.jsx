import React from "react";
import { Code2, Puzzle, Layers, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing scalable, readable, and maintainable code that stands the test of time.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description:
      "Breaking down complex problems into clear, logical, and efficient solutions.",
  },
  {
    icon: Layers,
    title: "System Design",
    description:
      "Designing modular and extensible architectures with long-term maintainability in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Security Awareness",
    description:
      "Applying secure coding practices and protecting applications from common vulnerabilities.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden md:py-20 lg:py-30 py-5"
    >
      {/*this will seperate our section into two*/}
      <div className="container mx-auto px-6 pb-20 relative z-10 flex flex-col xl:flex-row xl:gap-10">
        <div className="flex flex-col gap-10 animate-fade-in animation-delay-800">
          {/*left column - title*/}
          <div className="text-primary text-lg">
            <span>ABOUT ME</span>
          </div>
          {/*headline*/}
          <h2 className="text-primary text-5xl font-medium">
            Building the future,
            <span className="font-serif font-normal italic text-white">
              one line of code at a time.
            </span>
          </h2>
          <p className="text-muted-foreground text-md ">
            I’m a 4th year computer engineering student at ENSA Tangier, with a
            strong focus on building reliable, well-structured software. <br />
            <br />
            I care deeply about clean code, solid system design, and
            understanding how things work under the hood rather than relying on
            shortcuts or surface-level solutions.
            <br />
            I enjoy problem-solving that requires breaking complex systems into
            clear, logical components.
            <br />
            <br />
            I’m particularly interested in applied AI, especially in healthcare,
            where well-designed models and systems can have real-world impact.
            My goal is to build software that is not only functional, but
            maintainable, secure, and meaningful over time.
          </p>
          <div className="glass w-auto py-10 px-3 rounded-xl text-center text-xl glow-border mb-10">
            <span>
              "My mission is to build meaningful systems that combine strong
              engineering principles with real-world impact."
            </span>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {highlights.map((highlight,index)=>(
              <div key={index} className="flex flex-col gap-4 items-center justify-center glass w-auto py-10 px-3 rounded-xl text-center text-xl glow-border transition-color duration-300 hover:scale-[1.02]">
                <div className="glass p-5 rounded-lg">
                  {<highlight.icon className="h-6 w-6 text-primary"/>}
                </div>
                <span className="glow-text text-md">{highlight.title}</span>
              <p className="text-sm text-muted-foreground "> {highlight.description} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
