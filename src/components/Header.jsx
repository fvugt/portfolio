import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig";

export default function Header() {
  return (
    <header className="w-full bg-(--color-surface) border-b border-(--color-border)">
      <nav className="container py-4 flex items-center justify-between">
        
        {/* Naam links */}
        <Link to="/" S className="text-lg font-semibold text-(--color-text) hover:text-(--color-accent) transition">
          {siteConfig.name}
        </Link>

        {/* Knoppen rechts */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/projects" className="text-(--color-muted) hover:text-(--color-accent) transition">
            Projects
          </Link>

          <Link to="/about" className="text-(--color-muted) hover:text-(--color-accent) transition">
            About Me
          </Link>
        </div>
      </nav>
    </header>
  );
}
