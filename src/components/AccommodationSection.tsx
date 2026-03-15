"use client";
import { Bed, ExternalLink } from "lucide-react";

const hotels = [
  {
    name: "Agroturismo Es Quatre Cantons",
    desc: "Closest to the wedding",
    url: "https://maps.app.goo.gl/qd2FewV6G4LyeJwA8?g_st=ipc",
  },
  {
    name: "La Pérgola",
    desc: "Recommended accommodation",
    url: "https://maps.app.goo.gl/YzWdsgTx8hJULbwRA?g_st=ipc",
  },
];

export default function AccommodationSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Bed className="w-8 h-8 mx-auto mb-4 text-sage-dark" />
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-2">
            Accommodation
          </h2>
          <p className="text-sage-dark/70 font-body tracking-wide">
            Recommendations for your stay
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="card-elegant">
              <h3 className="font-display text-xl text-sage-dark mb-2">
                {hotel.name}
              </h3>
              <p className="text-sage-dark/70 font-body text-sm mb-4">
                {hotel.desc}
              </p>
              <a
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors border bg-ivory h-9 rounded-md px-3 gap-2 border-maroon/30 text-charcoal hover:bg-maroon hover:text-white"
              >
                <ExternalLink className="w-4 h-4" />
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
