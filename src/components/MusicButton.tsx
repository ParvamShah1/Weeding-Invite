"use client";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, RefObject } from "react";

interface MusicButtonProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function MusicButton({ audioRef }: MusicButtonProps) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-maroon/90 text-white shadow-lg hover:bg-maroon transition-all duration-300 backdrop-blur-sm"
      aria-label={playing ? "Mute" : "Play music"}
    >
      {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
}
