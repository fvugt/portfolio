import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group card hover:shadow-xl hover:border-accent/30 transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="relative overflow-hidden rounded-md mb-4 -mx-6 -mt-6">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="heading-md mb-2 group-hover:text-(--accent) transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-(--muted) line-clamp-2 flex-1">
        {project.tagline}
      </p>
    </Link>
  );
}
