import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../siteConfig";

export default function Header() {
  // Get current route to determine which nav link should be highlighted
  const location = useLocation();

  // Function to scroll page to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Navigation links with active state detection
  // Each link checks if its route matches the current page
  const navLinks = [
    { 
      to: '/projects', 
      label: 'Projects', 
      // Active on /projects or any project detail page (/projects/...)
      isActive: location.pathname === '/projects' || location.pathname.startsWith('/project/') 
    },
    { 
      to: '/about', 
      label: 'About me', 
      isActive: location.pathname === '/about' 
    },
    { 
      to: '/contact', 
      label: 'Contact', 
      isActive: location.pathname === '/contact' 
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-(--surface) border-b border-(--bordercolor) backdrop-blur-sm">
      <nav className="container py-4 flex items-center justify-between">
        
        {/* Site name */}
        <Link 
          to="/" 
          onClick={scrollToTop}
          className="text-3xl ml-4 font-bold text-(--text)"
        >
          {siteConfig.name}
        </Link>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          {navLinks.map(link => (
            <Link 
              key={link.to}
              to={link.to}
              onClick={scrollToTop}
              className={`
                px-4 py-2 rounded-lg font-semibold text-base
                transition-all duration-200
                ${link.isActive 
                  ? 'bg-(--accent) text-(--accent-text)' 
                  : 'text-(--text) hover:text-(--accent)'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
