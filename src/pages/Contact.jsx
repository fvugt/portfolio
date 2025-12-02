import { siteConfig } from "../siteConfig";

export default function Contact() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        
        {/* HERO SECTION */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-(--text)">
            Contact
          </h1>
          <p className="text-xl text-(--muted) max-w-2xl">
            Neem contact op - ik hoor graag van je!
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* GitHub */}
            <a 
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group p-8 rounded-xl border-2 border-(--bordercolor) bg-(--surface)
                hover:border-(--accent) hover:bg-(--accent) hover:text-(--accent-text)
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300 flex flex-col items-center gap-4
              "
            >
              <svg className="w-16 h-16 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">GitHub</div>
                <div className="text-base text-(--muted) group-hover:text-(--accent-text) transition-colors">Bekijk mijn code</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group p-8 rounded-xl border-2 border-(--bordercolor) bg-(--surface)
                hover:border-(--accent) hover:bg-(--accent) hover:text-(--accent-text)
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300 flex flex-col items-center gap-4
              "
            >
              <svg className="w-16 h-16 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">LinkedIn</div>
                <div className="text-base text-(--muted) group-hover:text-(--accent-text) transition-colors">Connect met mij</div>
              </div>
            </a>

            {/* Itch.io */}
            <a 
              href={siteConfig.socials.itch}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group p-8 rounded-xl border-2 border-(--bordercolor) bg-(--surface)
                hover:border-(--accent) hover:bg-(--accent) hover:text-(--accent-text)
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300 flex flex-col items-center gap-4
              "
            >
              <svg className="w-16 h-16 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.4-1.102 2.4-2.41 0 1.308 1.07 2.41 2.4 2.41 1.329 0 2.4-1.102 2.4-2.41 0 1.308 1.07 2.41 2.4 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.436 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.134-3.363 0-5.617.02-8.87.134zm6.002 6.49c-.432.085-.783.186-1.045.3-1.578.705-2.727 2.337-2.727 4.116 0 1.287.562 2.446 1.45 3.243-.59.674-.975 1.558-.975 2.53 0 2.075 1.682 3.76 3.756 3.76h5.28c2.073 0 3.755-1.685 3.755-3.76 0-.972-.384-1.856-.975-2.53.889-.797 1.45-1.956 1.45-3.242 0-1.78-1.15-3.411-2.728-4.117-.264-.114-.614-.215-1.046-.3-.016.136-.042.27-.085.4-.14.44-.513.822-1.015.822h-3.82c-.502 0-.875-.382-1.015-.822-.043-.13-.069-.264-.085-.4z"/>
              </svg>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">Itch.io</div>
                <div className="text-base text-(--muted) group-hover:text-(--accent-text) transition-colors">Speel mijn games</div>
              </div>
            </a>
          </div>

          {/* Email CTA */}
          <div className="p-10 rounded-2xl border-2 border-(--accent) bg-(--surface) text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-3 text-(--text)">Interesse in samenwerken?</h3>
            <p className="text-(--muted) text-lg mb-8">Stuur me een berichtje - ik hoor graag van je!</p>
            <a 
              href={`mailto:${siteConfig.email || 'contact@example.com'}`}
              className="
                inline-flex items-center gap-3 px-10 py-5 rounded-xl
                bg-(--accent) text-(--accent-text) font-bold text-lg
                hover:bg-(--accent-hover) hover:scale-105 hover:shadow-2xl
                transition-all duration-200
                shadow-lg
              "
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een email
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
