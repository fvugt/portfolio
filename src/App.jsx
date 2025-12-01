export default function App() {
  return (
    <main className="main-section">
      <h1 className="heading-xl mb-4">Welkom op mijn portfolio</h1>

      <p className="body-text max-w-xl">
        Dit portfolio is gebouwd met React, Vite en Tailwind CSS v4.
      </p>

      <div className="card mt-8">
        <p className="text-sm text-[var(--color-muted)]">
          ✔ Tailwind actief  
          ✔ Thema geladen  
          ✔ Eerste UI werkt
        </p>
      </div>
    </main>
  );
}