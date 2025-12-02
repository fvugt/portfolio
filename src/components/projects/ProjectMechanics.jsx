import { useEffect } from "react";
import Prism from "prismjs";

// PrismJS styles for code syntax highlighting
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-csharp";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

/**
 * ProjectMechanics - Display project code examples with syntax highlighting
 * 
 * Features:
 * - Shows code snippets with C# syntax highlighting
 * - Displays side-by-side with preview images
 * - Uses PrismJS library for code formatting
 */
export default function ProjectMechanics({ project }) {
  // Run syntax highlighting after component renders
  // useEffect runs after every render to catch dynamically loaded code
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="flex flex-col ml-4 mr-4">
      {/* Loop through each mechanic/code example */}
      {project.mechanics.map((m, i) => (
        <div key={i} className="flex flex-col gap-4 border-b border-(--bordercolor) pb-4 mb-4">
          {/* Title + Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-(--text)">{m.subtitle}</h3>
            <p className="leading-relaxed text-(--muted)">{m.description}</p>
          </div>

          {/* Code block with syntax highlighting */}
          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-stretch">
            <pre
              className="h-60 overflow-auto p-3 text-xs"
              style={{ background: 'var(--surface)', color: 'var(--text)' }}>
              <code className="language-csharp">{m.code}</code>
            </pre>

            {/* Image preview */}
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
