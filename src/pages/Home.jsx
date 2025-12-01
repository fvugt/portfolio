import projectData from "../data/projectdata.json";

export default function Home() {
  return (
    <section className="main-section">
      <h1 className="heading-xl mb-6">Mijn Projecten</h1>

      <p className="body-text max-w-xl mb-10">
        Hieronder vind je een selectie van mijn projecten. Klik op een project om meer te zien.
      </p>

      {/* Grid van projecten */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.projects.map((project) => (
          <a
            key={project.id}
            href={`#/projects/${project.id}`}
            className="card hover:shadow-xl transition cursor-pointer"
          >
            <img 
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h2 className="heading-md mb-1">{project.title}</h2>
            <p className="text-sm text-[var(--color-muted)]">{project.tagline}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
