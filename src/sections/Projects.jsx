import { ArrowRightLeft, ArrowUpRight, GitBranch, Globe} from "lucide-react";
import React from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "PetMatch",
    description:
      "Intelligent pet adoption platform developed in an Agile (Scrum) environment. Led a team of 5 developers and contributed to fullstack feature implementation. Integrated AI-powered recommendations via Grok API. Implemented automated testing and Docker-based CI/CD deployment.",
    image: "/petmatch.png",
    github: "https://github.com/Fatima-Ezzahra33/petMatch",
    status: "Finished",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Laravel",
      "Docker",
      "PHPUnit",
      "Cypress",
      "Grok AI"
    ],
    site: "https://petmatch.space"
  },
  {
    title: "Asylia",
    description:
      "AI-powered autoimmune disease detection platform. Designed and implemented a complete ML pipeline using Random Forest and XGBoost. Applied SHAP for model interpretability. Built secure Flask REST API and React frontend for interactive prediction visualization.",
    image: "/asylia.png",
    github: "",
    status: "In Progress",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "Flask",
      "React.js",
      "pytest"
    ]
  },
  {
    title: "GOMAT – Internal Management System",
    description:
      "Fullstack enterprise web application developed during internship for internal company management. Designed REST APIs, implemented automated testing, and built CI/CD pipeline with Docker multi-stage builds for staging and production deployment.",
    image: "/GOMAT.jpg",
    github: "",
    status: "Internship Project",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Spring Boot",
      "REST API",
      "JUnit",
      "Docker"
    ]
  },
  {
    title: "ImproveU",
    description:
      "End-of-year project focused on frontend testing and quality assurance. Implemented and automated unit and end-to-end testing using Vitest and Cypress. Collaborated with frontend and backend teams to improve reliability and stability.",
    image: "/improveU.png",
    github: "https://github.com/akram-projects/ImproveU",
    status: "Finished",
    technologies: [
      "Vue.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Vitest",
      "Cypress"
    ]
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden md:py-20 lg:py-30 py-5 -mt-5 md:-mt-10 lg:-mt-40"
    >
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container flex flex-col items-center justify-center gap-4 mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="text-primary text-lg">
            <span>Featured work</span>
          </div>
          {/*headline*/}
          <h2 className="text-primary text-5xl font-medium text-center">
            Projects that{" "}
            <span className="font-serif font-normal italic text-white">
              make an impact{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-sm text-center">
            A selection of projects that demonstrate my skills in software
            engineering, data science, and AI, showcasing my ability to build
            meaningful systems with real-world impact.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="mt-10 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 hover:cursor-pointer mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center glass w-auto rounded-xl text-xl pb-5 glow-border transition-color duration-300 hover:scale-[1.02]"
              >
                <div className="rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-6/3 object-cover rounded-t-lg"
                  />
                </div>
                <div>
                  <span className="glow-text text-md px-4 ">
                    {project.title}
                  </span>
                  <a href={project.github}>
                    {" "}
                    <GitBranch className="float-right mr-4 mt-1 text-primary hover:cursor-pointer animate-pulse transition-colors" />
                  </a>
                  {project.site && (
                    <a href={project.site}>
                      <Globe className="float-right mr-4 mt-1 text-primary hover:cursor-pointer animate-pulse transition-colors" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground px-4 ">
                  {" "}
                  {project.description}{" "}
                </p>
                <div>
                  <div className="px-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm px-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors mx-1 glass rounded-xl py-1 inline-block mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <AnimatedBorderButton>
          view all projects
          <ArrowUpRight className="w-5 h-5 animate-pulse" />
        </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
}

export default Projects;
