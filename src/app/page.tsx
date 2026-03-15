"use client";
import { useState, useRef } from "react";
import IntroOverlay from "@/components/IntroOverlay";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import DetailsSection from "@/components/DetailsSection";
import DressCodeSection from "@/components/DressCodeSection";
import ProgramSection from "@/components/ProgramSection";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import MusicButton from "@/components/MusicButton";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleIntroEnter = () => {
    setShowIntro(false);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/assets/IMG_3040.mp3" />
      {showIntro && <IntroOverlay onEnter={handleIntroEnter} />}
      {!showIntro && <MusicButton audioRef={audioRef} />}
      <main className="bg-ivory">
        <HeroSection />
        <CountdownSection />
        <DetailsSection />
        <Divider />
        <DressCodeSection />
        <Divider />
        <ProgramSection />
        <Footer />
      </main>
    </>
  );
}
