import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../siteConfig";

export default function Header() {
  const location = useLocation();
  const isProjects = location.pathname === '/projects' || location.pathname.startsWith('/project/');
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-(--surface) border-b border-(--bordercolor) backdrop-blur-sm">
      <nav className="container py-4 flex items-center justify-between">
        
        {/* Naam links */}
        <Link 
          to="/" 
          onClick={scrollToTop}
          className="text-3xl ml-4 font-bold text-(--text)"
        >
          {siteConfig.name}
        </Link>

        {/* Knoppen rechts */}
        <div className="flex items-center gap-2">
          <Link 
            to="/projects"
            onClick={scrollToTop}
            className={`
              px-4 py-2 rounded-lg font-semibold text-base
              transition-all duration-200
              ${isProjects 
                ? 'bg-(--accent) text-(--accent-text)' 
                : 'text-(--text) hover:text-(--accent)'
              }
            `}
          >
            Projects
          </Link>

          <Link 
            to="/about"
            onClick={scrollToTop}
            className={`
              px-4 py-2 rounded-lg font-semibold text-base
              transition-all duration-200
              ${isAbout
                ? 'bg-(--accent) text-(--accent-text)'
                : 'text-(--text) hover:text-(--accent)'
              }
            `}
          >
            About me
          </Link>

          <Link 
            to="/contact"
            onClick={scrollToTop}
            className={`
              px-4 py-2 rounded-lg font-semibold text-base
              transition-all duration-200
              ${isContact
                ? 'bg-(--accent) text-(--accent-text)'
                : 'text-(--text) hover:text-(--accent)'
              }
            `}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
