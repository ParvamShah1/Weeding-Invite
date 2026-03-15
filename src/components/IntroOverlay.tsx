"use client";
import { useState, useRef, useEffect, RefObject } from "react";

interface IntroOverlayProps {
  onEnter: () => void;
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function IntroOverlay({ onEnter, audioRef }: IntroOverlayProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // On mount, seek to first frame so it's visible
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0.001;
    }
  }, []);

  const handleClick = () => {
    if (isPlaying || isExiting) return;

    const video = videoRef.current;
    if (video) {
      setIsPlaying(true);
      // Play from the very start — no reset needed since we're at 0.001
      video.currentTime = 0;
      video.muted = false;
      video.play().catch(() => {
        setIsExiting(true);
        setTimeout(() => onEnter(), 800);
      });
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleVideoEnded = () => {
    setIsExiting(true);
    setTimeout(() => onEnter(), 800);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration && video.currentTime >= video.duration - 0.3) {
      handleVideoEnded();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 cursor-pointer"
      style={{
        opacity: isExiting ? 0 : 1,
        transition: "opacity 0.8s ease-out",
        pointerEvents: isExiting ? "none" : "auto",
        backgroundColor: "#1E1A19",
      }}
      onClick={handleClick}
    >
      {/* Video always visible — first frame shown via seek */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-20"
        playsInline
        preload="auto"
        muted
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/assets/Envelope.mp4" type="video/mp4" />
      </video>

      {/* Tap to open */}
      <div
        className="absolute inset-0 flex items-end justify-center pb-12 z-30 pointer-events-none transition-opacity duration-700 ease-out"
        style={{ opacity: isPlaying ? 0 : 1 }}
      >
        <p className="text-maroon text-sm font-body tracking-widest uppercase animate-pulse">
          Tap to open
        </p>
      </div>
    </div>
  );
}
