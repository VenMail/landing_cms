// src/components/PageSections/VideoPlayer.jsx
import React, { useEffect, useRef, useState } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            // Handle autoplay failure silently
          });
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-50px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden group bg-gray-900"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        playsInline
        src="/video.mp4"
        poster="/video-poster.jpg"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-20 h-20 flex items-center justify-center
                 bg-white/10 backdrop-blur-md rounded-full
                 border-2 border-white/30
                 opacity-0 group-hover:opacity-100
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:bg-white/20"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <IoPauseOutline className="w-8 h-8 text-white" />
        ) : (
          <IoPlayOutline className="w-8 h-8 text-white ml-1" />
        )}
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white origin-left transition-transform duration-100"
          style={{
            transform: `scaleX(${progress / 100})`
          }}
        />
      </div>
    </div>

    <div className="mt-4 flex justify-center">
      <a
        href="https://app.venmail.io"
        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors duration-200"
      >
        Sign up now
      </a>
    </div>
    </>
  );
}