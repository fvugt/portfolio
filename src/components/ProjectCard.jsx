import { Link } from "react-router-dom";

/**
 * ProjectCard - Displays a clickable project preview card
 * 
 * Props:
 * - project: Object containing project data (id, title, tagline, thumbnail)
 */
export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="
        group p-6 rounded-xl bg-(--surface) border border-(--bordercolor)
        hover:shadow-xl hover:border-(--accent)/30 
        transition-all duration-300 cursor-pointer flex flex-col
      "
    >
      {/* Project thumbnail with hover zoom effect */}
      {/* Negative margins (-mx-6 -mt-6) extend image to card edges */}
      <div className="relative overflow-hidden rounded-md mb-4 -mx-6 -mt-6">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Dark gradient overlay appears on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project title - changes color on hover */}
      <h3 className="text-xl font-semibold mb-2 text-(--text) group-hover:text-(--accent) transition-colors">
        {project.title}
      </h3>
      {/* Project tagline - limited to 2 lines with ellipsis */}
      <p className="text-sm text-(--muted) line-clamp-2 flex-1">
        {project.tagline}
      </p>
    </Link>
  );
}
