"use client";
import { MapPin, Clock, Calendar } from "lucide-react";
import Image from "next/image";

export default function DetailsSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Image
            src="/assets/Glasses.png"
            alt="Glasses illustration"
            width={300}
            height={300}
            className="mx-auto mb-6"
            style={{ width: "80px", height: "auto" }}
          />
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-2">
            Reception Details
          </h2>
          <p className="text-sage-dark/70 font-body tracking-wide">
            Everything you need to know
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-sage/30 p-8 md:p-12 rounded-lg shadow-sm text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(81, 13, 11, 0.12)" }}>
            <MapPin className="w-6 h-6" style={{ color: "#510D0B" }} />
          </div>

          <h3 className="font-display text-2xl text-sage-dark mb-4">
            Location
          </h3>

          <p className="font-display text-lg text-sage-dark/80 mb-1">
            The Nines, Juhu
          </p>

          <div className="flex items-center justify-center gap-2 text-sage-dark/60 mb-8">
            <Clock className="w-4 h-4" />
            <span className="font-body text-sm">7PM Onwards</span>
          </div>

          <div className="mb-6 rounded-lg overflow-hidden border border-sage/30 relative group">
            <Image
              src="/assets/4a38cff05f33d98ba5f33996a6929281.avif"
              alt="Finca Biniagual - Aerial view"
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="mb-6 rounded-lg overflow-hidden border border-sage/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8076404521994!2d72.8279982!3d19.116092899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90318119bad%3A0x64a62b32d109c2b0!2sThe%20Nines!5e0!3m2!1sen!2sin!4v1773580386576!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Nines - Location Map"
              style={{ border: 0 }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://maps.app.goo.gl/jGzrTY6nq7TZBgAc6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors border bg-ivory h-9 rounded-md px-3 gap-2 border-maroon/30 text-charcoal hover:bg-maroon hover:text-white"
            >
              <MapPin className="w-4 h-4" />
              Open in Maps
            </a>
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Tanvi%20%26%20Meet%20-%20Sufi%20Night&dates=20260521T133000Z&location=The%20Nines%2C%20Mumbai&ctz=Asia/Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors border bg-ivory h-9 rounded-md px-3 gap-2 border-maroon/30 text-charcoal hover:bg-maroon hover:text-white"
            >
              <Calendar className="w-4 h-4" />
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
