"use client";
import { useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const tryPlay = useCallback(() => {
    const v = videoRef.current;
    if (v && v.paused) {
      v.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Safari may pause on visibility change or low power — resume on these events
    v.addEventListener("pause", tryPlay);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") tryPlay();
    });
    window.addEventListener("focus", tryPlay);

    // Also try playing on first interaction (Safari sometimes needs it)
    const onInteraction = () => {
      tryPlay();
      window.removeEventListener("touchstart", onInteraction);
      window.removeEventListener("click", onInteraction);
    };
    window.addEventListener("touchstart", onInteraction, { passive: true });
    window.addEventListener("click", onInteraction);

    // Initial play attempt
    tryPlay();

    return () => {
      v.removeEventListener("pause", tryPlay);
      window.removeEventListener("focus", tryPlay);
      window.removeEventListener("touchstart", onInteraction);
      window.removeEventListener("click", onInteraction);
    };
  }, [tryPlay]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-ivory">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/assets/Sufi Night Website Video.mp4"
          className="w-full h-full object-cover"
          style={{ objectPosition: "right center" }}
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Main content — pushed to top */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 md:pt-24">

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-lg">
            Tanvi Uday Sait
          </h1>
          <p className="text-xs md:text-sm font-body text-white/60 tracking-wider mt-2 drop-shadow-md">
            Daughter of Uday Pandurang Sait & Trupti Uday Sait
          </p>

          <div className="flex items-center justify-center gap-4 my-3">
            <span className="font-display text-xl md:text-2xl font-light text-gold italic drop-shadow-md">
              &amp;
            </span>
          </div>

          <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-lg">
            Meet Vinay Shah
          </h1>
          <p className="text-xs md:text-sm font-body text-white/60 tracking-wider mt-2 drop-shadow-md">
            Son of Vinay Kishor Shah & Chetal Vinay Shah
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4 md:mt-5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <span className="h-px bg-white/40 w-12 md:w-20" />
          <span className="text-gold text-sm drop-shadow-md">✦</span>
          <span className="h-px bg-white/40 w-12 md:w-20" />
        </div>

        <p
          className="text-lg md:text-xl font-display font-semibold tracking-wider text-white italic drop-shadow-md mt-2 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          May 21, 2026 · 7 PM Onwards
        </p>
      </div>

      {/* Spacer to push CTA to bottom */}
      <div className="flex-1" />

      <button
        onClick={() => {
          document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="relative z-10 flex flex-col items-center gap-2 text-center text-white/80 hover:text-white transition-colors cursor-pointer animate-fade-in pb-8"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="animate-bounce-slow">
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
    </section>
  );
}
