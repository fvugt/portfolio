import { useState } from "react";

export default function ProjectGallery({ project }) {
  const { screenshots, youtube } = project;

  // Build the unified slide list: video first (if present), then screenshots
  const slides = [
    ...(youtube ? [{ type: "video", src: youtube }] : []),
    ...screenshots.map((s) => ({ type: "image", src: s })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mb-4 ml-4 mr-4">
      <h2 className="heading-md text-(--color-text)">Gallery</h2>

      <div className="space-y-6 mt-4">
        {slides.length > 0 && (
          <div className="relative group">
            {/* Slide container */}
            <div className="overflow-hidden bg-(--color-surface) aspect-video relative">

              {/* VIDEO SLIDE */}
              {slides[currentIndex].type === "video" && (
                <iframe
                  src={slides[currentIndex].src}
                  title="Project Video"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}

              {/* IMAGE SLIDE */}
              {slides[currentIndex].type === "image" && (
                <img
                  src={slides[currentIndex].src}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => window.open(slides[currentIndex].src, "_blank")}
                />
              )}
            </div>

            {/* ========== NAVIGATION BUTTONS (IMPROVED VISIBILITY) ========== */}
            {slides.length > 1 && (
              <>
                {/* LEFT ARROW */}
                <button
                  onClick={prevSlide}
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    p-4 rounded-full
                    bg-black/60 hover:bg-black/80
                    text-white
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    ring-2 ring-white/20 hover:ring-white/40
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={nextSlide}
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    p-4 rounded-full
                    bg-black/60 hover:bg-black/80
                    text-white
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    ring-2 ring-white/20 hover:ring-white/40
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* SLIDE DOTS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`
                        w-2 h-2 rounded-full transition-all
                        ${idx === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"}
                      `}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
