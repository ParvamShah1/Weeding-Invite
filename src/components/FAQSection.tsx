"use client";
import { CircleHelp, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Can I bring a plus one?",
    a: "This invitation is personal. If you have any questions, don't hesitate to contact us directly.",
  },
  {
    q: "Will there be parking available?",
    a: "Yes, the venue has free parking for all guests.",
  },
  {
    q: "What dress code should I follow?",
    a: "Formal/elegant attire. We recommend comfortable footwear as the event takes place at a country estate.",
  },
  {
    q: "Can I take photos during the ceremony?",
    a: "We ask that during the ceremony you enjoy the moment without devices. There will be a professional photographer. Afterwards, feel free to take all the photos you want!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <CircleHelp className="w-8 h-8 mx-auto mb-4 text-sage-dark" />
          <h2 className="font-script text-4xl md:text-5xl text-sage-dark">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm border border-sage/30 px-6 rounded-lg"
            >
              <button
                className="flex flex-1 w-full items-center justify-between py-4 font-medium text-left font-display text-lg text-sage-dark"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="pb-4 text-sm text-sage-dark/70 font-body">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
