import { ArrowUpRight, GitBranch, Globe } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projects } from "@/data/projects";

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
        <div className="mt-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
            {projects.slice(0, 4).map((project, index) => (
              <Link
                to={`/projects/${project.id}`}
                key={index}
                className="flex flex-col gap-4 justify-center glass w-auto rounded-xl text-xl pb-5 glow-border transition-color duration-300 hover:scale-[1.02] hover:cursor-pointer"
              >
                <div className="rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-6/3 object-cover rounded-t-lg"
                  />
                </div>
                <div>
                  <span className="glow-text text-md px-4">
                    {project.title}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitBranch className="float-right mr-4 mt-1 text-primary hover:cursor-pointer animate-pulse transition-colors" />
                    </a>
                  )}
                  {project.site && (
                    <a
                      href={project.site}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Globe className="float-right mr-4 mt-1 text-primary hover:cursor-pointer animate-pulse transition-colors" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground px-4">
                  {project.description}
                </p>
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
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link to="/projects">
            <AnimatedBorderButton>
              view all projects
              <ArrowUpRight className="w-5 h-5 animate-pulse" />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;