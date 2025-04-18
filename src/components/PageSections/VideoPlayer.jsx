// src/components/PageSections/VideoPlayer.jsx
import React, { useEffect, useRef, useState } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: 'yleKVnjvzm8', // Replace with your YouTube video ID
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'disablekb': 1,
          'enablejsapi': 1,
          'fs': 0,
          'iv_load_policy': 3,
          'modestbranding': 1,
          'playsinline': 1,
          'rel': 0,
          'showinfo': 0
        },
        events: {
          'onStateChange': onPlayerStateChange,
          'onReady': onPlayerReady
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = (event) => {
    // Player is ready
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      startProgressTimer();
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
      stopProgressTimer();
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      stopProgressTimer();
      setProgress(0);
    }
  };

  let progressInterval;
  const startProgressTimer = () => {
    progressInterval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        setProgress((currentTime / duration) * 100);
      }
    }, 1000);
  };

  const stopProgressTimer = () => {
    clearInterval(progressInterval);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl overflow-hidden group bg-gray-900 shadow-lg"
      >
        <div id="youtube-player" className="w-full h-full" />
        
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

    <div className="mt-16 flex justify-center">
      <a
        href="https://app.venmail.io"
        target="_blank"
        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-none hover:bg-primary-700 transition-colors duration-200"
      >
        Sign up now
      </a>
    </div>
    </>
  );
}