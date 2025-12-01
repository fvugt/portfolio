import { Link } from "react-router-dom";

export default function ProjectPrevNext({ previous, next }) {
  return (
    <section className="mt-12 pt-8 border-t border-(--color-border) mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PREVIOUS */}
        <Link
          to={previous.url}
          className="
            group flex items-center gap-4 p-4 rounded-lg
            border border-(--color-border)
            hover:bg-(--color-surface-hover)
            transition shadow-sm hover:shadow-md
          "
        >
          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="
              w-7 h-7 text-(--color-text)
              group-hover:-translate-x-1 transition
            "
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          {/* Thumbnail */}
          <div className="w-20 h-14 overflow-hidden rounded">
            <img
              src={previous.thumbnail}
              alt={previous.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span className="text-(--color-muted) text-xs uppercase tracking-wide">Vorige</span>
            <span className="text-(--color-text) font-semibold text-lg">
              {previous.title}
            </span>
          </div>
        </Link>

        {/* NEXT */}
        <Link
          to={next.url}
          className="
            group flex items-center gap-4 p-4 rounded-lg
            border border-(--color-border)
            hover:bg-(--color-surface-hover)
            transition shadow-sm hover:shadow-md justify-end
          "
        >
          {/* Text */}
          <div className="flex flex-col text-right">
            <span className="text-(--color-muted) text-xs uppercase tracking-wide">Volgende</span>
            <span className="text-(--color-text) font-semibold text-lg">
              {next.title}
            </span>
          </div>

          {/* Thumbnail */}
          <div className="w-20 h-14 overflow-hidden rounded">
            <img
              src={next.thumbnail}
              alt={next.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="
              w-7 h-7 text-(--color-text)
              group-hover:translate-x-1 transition
            "
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
