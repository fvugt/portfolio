import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectdata.json";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";

export default function ProjectDetails() {
  // Get the project ID from the URL (e.g., /projects/asteroids-3d)
  const { projectId } = useParams();
  const projects = projectData.projects;

  // Find the project that matches the ID from the URL
  const project = projects.find((p) => p.id === projectId);

  // Show error page if project doesn't exist
  if (!project) {
    return (
      <main>
        <div className="container py-12 text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-(--text)">
              Project niet gevonden
            </h1>
            <p className="leading-relaxed text-(--muted) text-lg">
              Het project dat je zoekt bestaat niet of is verwijderd.
            </p>
          </div>
          
          <Link 
            to="/"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-xl
              bg-(--accent) text-(--accent-text) font-bold text-lg
              hover:bg-(--accent-hover) hover:scale-105 hover:shadow-xl
              transition-all duration-200 shadow-lg
            "
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Terug naar home
          </Link>
        </div>
      </main>
    );
  }

  // Calculate previous/next projects with looping
  // (last project links to first, first links to last)
  const currentIndex = projects.findIndex((p) => p.id === projectId);

  // Use modulo (%) to wrap around array:
  // Previous: subtract 1, add length to handle negative, then modulo
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Next: add 1, modulo wraps back to 0 at end
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <div className="container">
        <ProjectHeader project={project} />
        <ProjectInfo project={project} />
        <ProjectMechanics project={project} />
        <ProjectGallery project={project} />

        {/* Optional: single next button */}
        <ProjectPrevNext
          previous={{
            title: previousProject.title,
            url: `/projects/${previousProject.id}`,
            thumbnail: previousProject.banner,
          }}
          next={{
            title: nextProject.title,
            url: `/projects/${nextProject.id}`,
            thumbnail: nextProject.banner,
          }}
        />

        {/* If you want previous as well, add a second section or replace with a dual-navigation component */}
      </div>
    </main>
  );
}
