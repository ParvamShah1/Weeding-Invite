"use client";
import { Send, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function RSVPSection() {
  const [attending, setAttending] = useState("yes");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [otherAllergy, setOtherAllergy] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const allergyOptions = [
    { id: "gluten", label: "Gluten-free / Celiac" },
    { id: "lactose", label: "Lactose-free" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "nuts", label: "Nut allergy" },
    { id: "seafood", label: "Seafood allergy" },
  ];

  const toggleAllergy = (id: string) => {
    setAllergies((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="section-padding bg-ivory">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-4">
            ¡Gracias!
          </h2>
          <p className="text-sage-dark/70 font-body">
            Hemos recibido tu confirmación correctamente.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-ivory">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/assets/rings-illustration.png"
            alt="Wedding rings illustration"
            width={192}
            height={192}
            className="w-48 mx-auto mb-6"
          />
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark mb-2">
            Confirm Your Attendance
          </h2>
          <p className="text-sage-dark/70 font-body tracking-wide">
            We hope to count on you
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm border border-sage/30 rounded-lg p-8 space-y-6 shadow-sm"
        >
          {/* Name */}
          <div>
            <label className="text-sm text-sage-dark font-medium" htmlFor="name">
              Full Name *
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm mt-2 bg-ivory border-sage/30 text-sage-dark placeholder:text-sage-dark/50 focus:border-sage-dark focus:outline-none focus:ring-2 focus:ring-sage-dark/20"
              id="name"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-sage-dark font-medium" htmlFor="email">
              Email (optional)
            </label>
            <input
              type="email"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm mt-2 bg-ivory border-sage/30 text-sage-dark placeholder:text-sage-dark/50 focus:border-sage-dark focus:outline-none focus:ring-2 focus:ring-sage-dark/20"
              id="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Attending */}
          <div>
            <label className="text-sm text-sage-dark font-medium">
              Will you attend? *
            </label>
            <div className="flex gap-6 mt-3">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked={attending === "yes"}
                  className={`aspect-square h-4 w-4 rounded-full border border-maroon ${
                    attending === "yes" ? "bg-maroon" : ""
                  }`}
                  onClick={() => setAttending("yes")}
                >
                  {attending === "yes" && (
                    <span className="flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  )}
                </button>
                <label
                  className="text-sm font-medium cursor-pointer text-sage-dark"
                  onClick={() => setAttending("yes")}
                >
                  Yes, I will attend
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked={attending === "no"}
                  className={`aspect-square h-4 w-4 rounded-full border border-maroon ${
                    attending === "no" ? "bg-maroon" : ""
                  }`}
                  onClick={() => setAttending("no")}
                >
                  {attending === "no" && (
                    <span className="flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  )}
                </button>
                <label
                  className="text-sm font-medium cursor-pointer text-sage-dark"
                  onClick={() => setAttending("no")}
                >
                  I won't be able to attend
                </label>
              </div>
            </div>
          </div>

          {/* Guest count */}
          <div>
            <label className="text-sm text-sage-dark font-medium" htmlFor="guests">
              Number of guests (including yourself)
            </label>
            <input
              type="number"
              className="flex h-10 rounded-md border px-3 py-2 text-base md:text-sm mt-2 w-24 bg-ivory border-sage/30 text-sage-dark focus:border-sage-dark focus:outline-none focus:ring-2 focus:ring-sage-dark/20"
              id="guests"
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </div>

          {/* Allergies */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TriangleAlert className="w-4 h-4 text-gold" />
              <label className="text-base text-sage-dark font-medium">
                Food allergies and intolerances
              </label>
            </div>
            <p className="text-sm text-sage-dark/70 font-body">
              It is very important for us to know about any dietary restrictions.
              Select all that apply:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {allergyOptions.map((opt) => (
                <div key={opt.id} className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={allergies.includes(opt.id)}
                    className={`h-4 w-4 shrink-0 rounded-sm border border-maroon flex items-center justify-center ${
                      allergies.includes(opt.id)
                        ? "bg-maroon text-white"
                        : ""
                    }`}
                    onClick={() => toggleAllergy(opt.id)}
                  >
                    {allergies.includes(opt.id) && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                  <label
                    className="text-sm cursor-pointer text-sage-dark"
                    onClick={() => toggleAllergy(opt.id)}
                  >
                    {opt.label}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <label className="text-sm text-sage-dark font-medium" htmlFor="other-allergy">
                Other allergies or restrictions:
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm mt-2 bg-ivory border-sage/30 text-sage-dark placeholder:text-sage-dark/50 focus:border-sage-dark focus:outline-none focus:ring-2 focus:ring-sage-dark/20"
                id="other-allergy"
                placeholder="E.g.: egg allergy, fructose intolerance..."
                value={otherAllergy}
                onChange={(e) => setOtherAllergy(e.target.value)}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-sage-dark font-medium" htmlFor="message">
              Message for the couple (optional)
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm mt-2 bg-ivory border-sage/30 text-sage-dark placeholder:text-sage-dark/50 focus:border-sage-dark focus:outline-none focus:ring-2 focus:ring-sage-dark/20"
              id="message"
              placeholder="Write us a few words..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm h-10 px-4 py-2 w-full gap-2 bg-maroon hover:bg-maroon/90 text-white font-medium transition-colors"
            type="submit"
          >
            <Send className="w-4 h-4" />
            Send Confirmation
          </button>
        </form>
      </div>
    </section>
  );
}
