import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  GitBranch,
  Globe,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Layers,
  Cpu,
} from "lucide-react";
import { projects } from "../data/projects"; // USE RELATIVE PATH

const categoryConfig = {
  fullstack: {
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    label: "Full Stack",
  },
  datascience: {
    icon: Cpu,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    label: "Data Science",
  },
};

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Project not found</h2>
          <Link to="/projects" className="text-blue-400 hover:underline">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const catConfig =
    categoryConfig[project.category] || categoryConfig.fullstack;
  const CategoryIcon = catConfig.icon;
  const videoPath = `/videos/${project.id}.mp4`;

  const handleVideoClick = () => {
    const video = document.getElementById("demo-video");
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById("demo-video");
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple nav */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${catConfig.bg} ${catConfig.color}`}
          >
            <CategoryIcon className="w-4 h-4" />
            {catConfig.label}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${project.status === "Finished" ? "bg-emerald-400/10 text-emerald-400" : "bg-amber-400/10 text-amber-400"}`}
          >
            <CheckCircle2 className="w-3 h-3" />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title.split("–")[0]}
        </h1>
        {project.title.includes("–") && (
          <p className="text-xl text-gray-400 mb-8">
            – {project.title.split("–")[1]}
          </p>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <GitBranch className="w-5 h-5" />
              Source Code
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors font-medium"
            >
              <Globe className="w-5 h-5" />
              Live Demo
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Video Section */}
        <div className="relative mb-12 rounded-2xl overflow-hidden bg-gray-900 border border-white/10">
          {!videoError ? (
            <div className="relative aspect-video">
              <video
                id="demo-video"
                src={videoPath}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                poster={project.image}
                onError={() => setVideoError(true)}
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={handleVideoClick}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </button>
              </div>
              {/* Bottom controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleVideoClick}
                    className="text-white/80 hover:text-white"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMute}
                      className="text-white/80 hover:text-white"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center text-gray-500">
              <p>Video demo coming soon</p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-8">
          <h3 className="text-xl font-semibold mb-4">About this project</h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
