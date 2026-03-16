"use client";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-maroon text-center">
      <div>
        <Heart className="w-6 h-6 mx-auto mb-4 text-white/70" />
        <p className="font-script text-3xl text-white mb-2">Tanvi &amp; Meet</p>
        <p className="text-sm text-white/80 font-body tracking-wide">
          May 21, 2026
        </p>
        {/* <p className="text-xs text-white/60 mt-8 font-body">
          Made by Khushi Satra with a lot of love ❤️
        </p> */}
      </div>
    </footer>
  );
}
