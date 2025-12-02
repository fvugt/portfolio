import { Link } from "react-router-dom";
import projectData from "../data/projectdata.json";
import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main>
      <section className="container py-8 md:py-12">

        {/* ⭐ HERO SECTION ⭐ */}
        <div className="mb-16" id="home">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

            {/* Profile Image */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
              <img
                src={siteConfig.aboutImage}
                alt={siteConfig.name}
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-accent/30 shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4 text-center md:text-left flex-1">
              <div>
                <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
                  {siteConfig.role}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-text mb-3">
                  Hi, ik ben <span className="text-accent">{siteConfig.name}</span>
                </h1>
              </div>
              
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                {siteConfig.tagline}
              </p>

              <div className="flex gap-3 justify-center md:justify-start mt-4">
                <a
                  href="#contact"
                  className="
                    inline-flex items-center gap-2 px-8 py-4 rounded-xl
                    bg-(--accent) text-(--accent-text) font-bold text-lg
                    hover:bg-(--accent-hover) hover:scale-105 hover:shadow-xl
                    transition-all duration-200 shadow-lg
                  "
                >
                  Neem contact op
                </a>
                <a
                  href="#about"
                  className="
                    inline-flex items-center gap-2 px-8 py-4 rounded-xl
                    border-2 border-(--bordercolor) text-(--text) font-bold text-lg
                    hover:border-(--accent) hover:text-(--accent) hover:scale-105
                    transition-all duration-200
                  "
                >
                  Meer over mij
                </a>
              </div>
            </div>

            {/* Decorative Graphic */}
            <div className="hidden lg:flex relative w-64 h-64 shrink-0 items-center justify-center">
              {/* Floating circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
              
              {/* Grid pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" className="text-(--accent)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Code brackets */}
              <div className="relative text-(--accent)/30 font-mono text-6xl font-bold">
                {'</>'}
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="space-y-8" id="projects">
          <h2 className="text-3xl font-bold text-text pb-4 border-b border-(--bordercolor)">Mijn Projecten</h2>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
