import { siteConfig } from "../siteConfig";

export default function About() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* === INTRODUCTION & IMAGE === */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-(--bordercolor)">
          {/* About text - 2/3 width */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-(--text)">Over mij</h2>
            <div className="text-(--text) leading-relaxed space-y-4 whitespace-pre-line">
              {siteConfig.aboutLong}
            </div>

            {/* CV download button */}
            <a
              href={siteConfig.cv}
              download
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-lg
                bg-(--accent) text-(--accent-text) font-semibold text-sm
                hover:bg-(--accent-hover) hover:-translate-y-0.5 hover:shadow-lg
                transition-all duration-200
              ">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Profile photo - 1/3 width */}
          <div className="flex flex-col items-center md:items-end">
            <img
              src={siteConfig.aboutImage}
              alt="Profile"
              className="
                w-64 h-64 rounded-2xl object-cover
                border-2 border-(--bordercolor)
                shadow-lg
              "
            />
          </div>
        </section>

        {/* === SKILLS === */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-(--text)">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical skills */}
            <div className="p-6 rounded-lg border border-(--bordercolor) bg-(--surface)">
              <h3 className="text-lg font-semibold mb-4 text-(--text)">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.hardSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1.5 rounded-full text-sm
                      bg-(--bg) border border-(--bordercolor) text-(--text)
                      hover:border-(--accent) transition-colors
                    ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="p-6 rounded-lg border border-(--bordercolor) bg-(--surface)">
              <h3 className="text-lg font-semibold mb-4 text-(--text)">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1.5 rounded-full text-sm
                      bg-(--bg) border border-(--bordercolor) text-(--text)
                      hover:border-(--accent) transition-colors
                    ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
