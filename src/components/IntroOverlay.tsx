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
    if (!video) return;

    setIsPlaying(true);

    // Play video immediately — no seeking, no delays
    // iOS Safari requires play() to be called synchronously in the tap handler
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video started successfully — now start music too
          if (audioRef.current) {
            audioRef.current.play().catch(() => {});
          }
        })
        .catch(() => {
          // Video failed to play — skip to hero
          setIsExiting(true);
          setTimeout(() => onEnter(), 800);
        });
    }
  };

  const handleVideoEnded = () => {
    if (isExiting) return;
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
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-20"
        playsInline
        preload="auto"
        muted
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        src="/assets/Envelope T&M.mp4#t=0.001"
      />

      {/* Tap to open */}
      <div
        className="absolute inset-0 flex items-end justify-center pb-12 z-30 pointer-events-none transition-opacity duration-700 ease-out"
        style={{ opacity: isPlaying ? 0 : 1 }}
      >
        <p className="text-white text-sm font-body tracking-widest uppercase animate-pulse">
          Tap to open
        </p>
      </div>
    </div>
  );
}
