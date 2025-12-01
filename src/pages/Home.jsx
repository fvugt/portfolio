import { Link } from "react-router-dom";
import projectData from "../data/projectdata.json";

export default function Home() {
  const latest = projectData.projects[0]; // meest recente bovenaan lijst

  return (
    <section className="container mt-4">

      {/* ⭐ HERO SECTIE ⭐ */}
      <div className="mb-12 p-6 rounded-xl border border-(--color-border) bg-(--color-surface)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Afbeelding */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={latest.thumbnail}
              alt={latest.title}
              className="w-full h-56 md:h-64 object-cover rounded-lg"
            />
          </div>

          {/* Tekst */}
          <div className="flex flex-col gap-3">
            <h2 className="heading-xl text-(--color-text)">
              Nieuwste Project: {latest.title}
            </h2>

            <p className="body-text text-(--color-muted) max-w-md">
              {latest.tagline}
            </p>

            <Link
              to={`/projects/${latest.id}`}
              className="
                inline-flex items-center gap-2 px-4 py-2 mt-2
                bg-(--color-accent) text-black font-semibold
                rounded-md hover:brightness-90 transition
                w-fit
              "
            >
              Bekijk project →
            </Link>
          </div>
        </div>
      </div>

      {/* Titel + Intro */}
      <h1 className="heading-xl mb-6">Mijn Projecten</h1>

      <p className="body-text max-w-xl mb-10">
        Hieronder vind je een selectie van mijn projecten. Klik op een project
        om meer te zien.
      </p>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="card hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h2 className="heading-md mb-1">{project.title}</h2>
            <p className="text-sm text-(--color-muted)">
              {project.tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
