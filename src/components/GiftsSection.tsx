"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function GiftsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section-padding bg-ivory relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-6">
            Gifts
          </h2>
          <p className="text-sage-dark/80 font-body leading-relaxed max-w-lg mx-auto">
            Your presence is the most important thing to us.
            <br className="hidden md:block" /> If you wish to give us a gift,
            you can do so in whatever way is most convenient for you.
          </p>
        </div>

        <div className="card-elegant overflow-hidden !p-0">
          <button
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage/5 transition-colors"
            onClick={() => setOpen(!open)}
          >
            <span className="font-display text-lg text-sage-dark">
              Contribution
            </span>
            <ChevronDown
              className={`w-5 h-5 text-sage-dark/60 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: open ? "200px" : "0",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="px-6 pb-5 text-sage-dark/70 font-body text-sm">
              <p>IBAN: ES00 0000 0000 0000 0000 0000</p>
              <p className="mt-1">Account holder: Mar & Jaume</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
