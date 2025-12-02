import { useParams } from "react-router-dom";
import projectData from "../data/projectdata.json";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";
// or a dual PreviousNext component if you prefer

export default function ProjectDetails() {
  const { projectId } = useParams();
  const projects = projectData.projects;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main>
        <div className="container py-8">
          <h1 className="heading-xl mb-4">Project niet gevonden</h1>
          <p className="body-text">Het gekozen project bestaat niet.</p>
        </div>
      </main>
    );
  }

  // --- Compute looping prev/next ---
  const currentIndex = projects.findIndex((p) => p.id === projectId);

  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];

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
