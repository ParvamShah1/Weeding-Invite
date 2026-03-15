"use client";
import {
  Heart,
  Music,
  Disc3,
} from "lucide-react";

const events = [
  { time: "7:00 PM", title: "Guest Arrival", desc: "Welcome and gathering", icon: Heart },
  { time: "7:30 PM", title: "Qawali Night", desc: "Soulful Sufi music performance", icon: Music },
  { time: "10:00 PM", title: "DJ Night", desc: "Dance the night away", icon: Disc3 },
];

export default function ProgramSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-2">
            Evening Lineup
          </h2>
          <p className="text-sage-dark/70 font-body tracking-wide">
            What we have planned for you
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative">
          <div className="hidden md:block">
            <div className="absolute top-16 left-0 right-0 h-px bg-sage/30" />
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {events.map((event) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.time}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="bg-maroon text-white px-3 py-1.5 rounded-full text-sm font-display font-medium mb-4 group-hover:bg-maroon/80 transition-colors duration-300">
                      {event.time}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-sage/40 flex items-center justify-center text-sage-dark mb-4 shadow-sm group-hover:border-sage-dark group-hover:scale-110 transition-all duration-300 z-10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base lg:text-lg text-sage-dark leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-sage-dark/50 font-body text-xs leading-relaxed px-1">
                      {event.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-sage/30" />
            <div className="space-y-6">
              {events.map((event) => {
                const Icon = event.icon;
                return (
                  <div key={event.time} className="flex items-start gap-4 pl-1">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-sage/40 flex items-center justify-center text-sage-dark shrink-0 shadow-sm z-10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="bg-maroon text-white px-2 py-0.5 rounded text-xs font-display font-medium">
                        {event.time}
                      </span>
                      <h3 className="font-display text-lg text-sage-dark mt-2.5">
                        {event.title}
                      </h3>
                      <p className="text-sage-dark/60 font-body text-sm">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
