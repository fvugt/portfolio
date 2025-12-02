import { useEffect } from "react";
import Prism from "prismjs";

export default function ProjectMechanics({ project }) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="flex flex-col ml-4 mr-4">
      {project.mechanics.map((m, i) => (
        <div key={i} className="flex flex-col gap-4 border-b border-(--bordercolor) pb-4 mb-4">
          {/* Title + Description */}
          <div>
            <h3 className="heading-md mb-2 text-(--color-text)">{m.subtitle}</h3>
            <p className="body-text">{m.description}</p>
          </div>

          {/* CODE LEFT — IMAGE RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-stretch">
            <pre
              className="h-60 overflow-auto p-3 text-xs"
              style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>
              <code className="language-csharp">{m.code}</code>
            </pre>

            {/* IMAGE SAME HEIGHT AS CODE */}
            {m.image && (
              <a href={m.image} target="_blank" rel="noopener noreferrer" className="h-60 flex mt-2 ml-4">
                <img src={m.image} alt={m.subtitle} className="w-full h-full object-cover cursor-pointer" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    // </section>
  );
}
