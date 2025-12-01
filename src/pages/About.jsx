import { siteConfig } from "../siteConfig";

export default function About() {
  return (
    <section className="main-section">
      <h1 className="heading-xl mb-6">About Me</h1>

      {/* Foto */}
      <img
        src={siteConfig.aboutImage}
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full mb-6 border border-[var(--color-border)]"
      />

      <p className="body-text max-w-xl mb-8">
        Ik ben een Game Development student met een passie voor gameplay programming,
        prototyping en XR. 
      </p>

      {/* CV */}
      <a 
        href={siteConfig.cv} 
        download 
        className="btn-primary mb-10 inline-block"
      >
        Download mijn CV
      </a>

      {/* Socials */}
      <div className="card flex flex-col gap-2">
        <h2 className="heading-md mb-2">Socials</h2>
        <a className="text-[var(--color-accent)] hover:underline" href={siteConfig.socials.github}>GitHub</a>
        <a className="text-[var(--color-accent)] hover:underline" href={siteConfig.socials.linkedin}>LinkedIn</a>
        <a className="text-[var(--color-accent)] hover:underline" href={siteConfig.socials.itch}>Itch.io</a>
      </div>
    </section>
  );
}
