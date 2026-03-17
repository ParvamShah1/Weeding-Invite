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
  const [introActive, setIntroActive] = useState(true);
  const [introGone, setIntroGone] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleIntroEnter = () => {
    setIntroActive(false);
    // Wait for fade-out to finish before showing music button
    setTimeout(() => setIntroGone(true), 1000);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/assets/IMG_3040.mp3" />
      {!introGone && <IntroOverlay onEnter={handleIntroEnter} audioRef={audioRef} />}
      {introGone && <MusicButton audioRef={audioRef} />}
      <main className="bg-ivory">
        <HeroSection />
        <DetailsSection />
        <Divider />
        <DressCodeSection />
        <Divider />
        <ProgramSection />
        <Divider />
        <CountdownSection />
        <Footer />
      </main>
    </>
  );
}
