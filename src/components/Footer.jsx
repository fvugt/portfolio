import { siteConfig } from "../siteConfig";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-(--bordercolor) py-6 text-center text-sm text-(--muted)">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}.  
        <span className="block sm:inline">
          {" "}Gemaakt met React, Vite en Tailwind CSS v4.
        </span>
      </p>
    </footer>
  );
}
