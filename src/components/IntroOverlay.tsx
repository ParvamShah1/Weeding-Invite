"use client";
import { useState, useRef, RefObject } from "react";

interface IntroOverlayProps {
  onEnter: () => void;
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function IntroOverlay({ onEnter, audioRef }: IntroOverlayProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (isPlaying || isExiting) return;

    const video = videoRef.current;
    if (video) {
      setIsPlaying(true);
      video.currentTime = 0;
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
      {/* Single video element — #t=0.001 forces first frame on iOS Safari */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-20"
        playsInline
        preload="metadata"
        muted
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        src="/assets/Envelope.mp4#t=0.001"
      />

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
