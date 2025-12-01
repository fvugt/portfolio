import { siteConfig } from "../siteConfig";

export default function About() {
  return (
    <main>
      <div className="container py-4">
        {/* HEADER */}
        {/* <section className="border-b border-(--color-border) pb-8 mx-4">
        </section> */}

        <h1 className="heading-md ml-4 text-(--color-text)">About Me</h1>
        {/* INTRO + IMAGE */}
        <section className="grid grid-cols-1 md:grid-cols-3 items-start border-b border-(--color-border) mx-4">
          {/* LEFT 2/3 — TEXT */}
          <div className="md:col-span-2 space-y-4">
            <p className="body-text leading-relaxed whitespace-pre-line">{siteConfig.aboutLong}</p>

            {/* CV BUTTON */}
            <a
              href={siteConfig.cv}
              download
              className="
                inline-flex items-center px-4 py-2 rounded-md
                bg-(--color-accent) text-black font-semibold
                hover:brightness-95 transition w-fit mt-4
              ">
              Download mijn CV
            </a>
          </div>

          {/* RIGHT 1/3 — PHOTO + SOCIALS */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img
              src={siteConfig.aboutImage}
              alt="Profile"
              className="
                w-48 h-48 rounded-xl object-cover
                border border-(--color-border)
                shadow-md
              "
            />

            <div className="flex gap-4 text-(--color-accent) text-sm">
              <a className="hover:underline" href={siteConfig.socials.github}>
                GitHub
              </a>
              <a className="hover:underline" href={siteConfig.socials.linkedin}>
                LinkedIn
              </a>
              <a className="hover:underline" href={siteConfig.socials.itch}>
                Itch.io
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-8 mx-4">
          <h2 className="heading-md mb-4 text-(--color-text)">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SOFT SKILLS */}
            <div className="p-6 rounded-lg border border-(--color-border) bg-(--color-surface)">
              <h3 className="heading-md mb-3 text-(--color-text)">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 rounded-full text-sm
                      bg-(--color-border)/30 text-(--color-muted)
                    ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* HARD SKILLS */}
            <div className="p-6 rounded-lg border border-(--color-border) bg-(--color-surface)">
              <h3 className="heading-md mb-3 text-(--color-text)">Hard Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.hardSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 rounded-full text-sm
                      bg-(--color-border)/30 text-(--color-muted)
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
