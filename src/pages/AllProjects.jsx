import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, GitBranch, Globe, Code2, BrainCircuit, LayoutGrid } from "lucide-react";
import { projects } from "@/data/projects";

const filters = [
  { key: "all", label: "All Projects", icon: LayoutGrid },
  { key: "fullstack", label: "Full Stack", icon: Code2 },
  { key: "datascience", label: "Data Science", icon: BrainCircuit },
];

function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative overflow-hidden md:py-20 lg:py-30 py-10 min-h-screen">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-primary text-lg">
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-primary text-5xl font-medium">
            All my{" "}
            <span className="font-serif font-normal italic text-white">
              projects
            </span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            A complete collection of my work across full-stack development and data science,
            showcasing real-world systems and AI-driven solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  isActive
                    ? "glass glow-border text-primary"
                    : "text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="w-full">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/projects/${project.id}`}
                key={index}
                className="flex flex-col gap-4 justify-center glass w-auto rounded-xl text-xl pb-5 glow-border transition-colors duration-300 hover:scale-[1.02] hover:cursor-pointer"
              >
                <div className="rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-6/3 object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex items-start justify-between px-4">
                  <span className="glow-text text-md">{project.title}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitBranch className="text-primary hover:cursor-pointer animate-pulse transition-colors" />
                      </a>
                    )}
                    {project.site && (
                      <a
                        href={project.site}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Globe className="text-primary hover:cursor-pointer animate-pulse transition-colors" />
                      </a>
                    )}
                  </div>
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

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>

        {/* Back to home */}
        <div className="mt-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-[-135deg]" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AllProjects;