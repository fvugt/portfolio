import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Naam links */}
        <Link 
          to="/" 
          className="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
        >
          {siteConfig.name}
        </Link>

        {/* Knoppen rechts */}
        <div className="flex items-center gap-6 text-sm">
          <Link 
            to="/about" 
            className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition"
          >
            About Me
          </Link>

          <Link 
            to="/projects" 
            className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition"
          >
            Projects
          </Link>
        </div>

      </nav>
    </header>
  );
}
