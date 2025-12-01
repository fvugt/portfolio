export default function ProjectInfo({ project }) {
  // Split description into paragraphs using newlines
  const paragraphs = project.description
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="mb-4 border-b border-(--color-border) pb-8 last:border-0 ml-4 mr-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: heading + description (spans 2 columns) */}
        <div className="md:col-span-2 space-y-3">
          <h2 className="heading-md text-(--color-text)">Over dit project</h2>

          {paragraphs.map((text, i) => (
            <p key={i} className="body-text">
              {text}
            </p>
          ))}
        </div>

        {/* RIGHT COLUMN: Details (aligned to top) */}
        <div className="h-fit md:self-start">
          <h3 className="heading-md mb-4 text-(--color-text) border-b border-(--color-border) pb-2">Details</h3>

          <ul className="text-sm space-y-2 text-(--color-muted)">
            <li className="flex justify-between border-b border-(--color-border) pb-1">
              <span className="font-medium text-(--color-text)">Rol</span>
              <span>{project.projectRole}</span>
            </li>

            <li className="flex justify-between border-b border-(--color-border) pb-1">
              <span className="font-medium text-(--color-text)">Tijdlijn</span>
              <span>{project.timeline}</span>
            </li>

            <li className="flex justify-between items-center pb-1">
              <span className="font-medium text-(--color-text)">Tags</span>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          </ul>
          {/* Optional action buttons (shown if links exist in JSON) */}
          <div className="mt-3 flex flex-wrap gap-2 justify-left">
            {project.git && (
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--color-accent)] text-black text-sm font-semibold hover:brightness-95 transition"
              >
                GitHub
              </a>
            )}

            {project.itch && (
              <a
                href={project.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--color-border)] text-[var(--color-text)] text-sm hover:bg-[var(--color-border)]/20 transition"
              >
                Itch.io
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
