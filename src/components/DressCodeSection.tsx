"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DressCodeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-ivory" ref={sectionRef}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-10">
          Dress Code
        </h2>

        <div
          className="transition-all duration-[2000ms] ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
          }}
        >
          <Image
            src="/assets/Dress Code Sufi Royalty.png"
            alt="Dress code - Sufi Royalty"
            width={600}
            height={430}
            className="mx-auto rounded-lg"
            style={{ width: "320px", height: "auto" }}
          />
        </div>

        <div
          className="mt-8 transition-all duration-[2000ms] ease-out delay-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="font-display text-xl md:text-2xl text-sage-dark tracking-wide">
            <span className="text-maroon font-semibold">Sufi Royalty</span>
          </p>
          <p className="text-sage-dark/60 font-body text-sm mt-3 max-w-md mx-auto">
            Embrace the elegance of rich fabrics, deep jewel tones, <br></br>and regal silhouettes inspired by Sufi heritage.
          </p>
        </div>
      </div>
    </section>
  );
}
