import React, { useState, useEffect, useRef } from 'react';
import { useCurrency } from '@/contexts/CurrencyContext';

const NigeriaFlagSplash = () => {
  const { country } = useCurrency();
  const [isVisible, setIsVisible] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const idleTimerRef = useRef(null);
  const activityTimeoutRef = useRef(null);
  const spinIntervalRef = useRef(null);

  // Spin animation function
  const triggerSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 400);
  };

  // Idle detection - show flag after 10 seconds of inactivity
  const resetIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    
    if (activityTimeoutRef.current) {
      clearTimeout(activityTimeoutRef.current);
    }

    if (spinIntervalRef.current) {
      clearInterval(spinIntervalRef.current);
    }

    // Mark as not idle immediately
    setIsIdle(false);
    setIsVisible(false);
    setIsSpinning(false);

    // Set idle timer for 10 seconds
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
      // Show flag with a slight delay for smooth transition
      activityTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
        // Start spin interval after flag appears
        spinIntervalRef.current = setInterval(triggerSpin, 3000);
        // Trigger first spin immediately
        triggerSpin();
      }, 100);
    }, 10000);
  };

  useEffect(() => {
    // Only set up idle detection if user is in Nigeria
    if (country !== 'NG') {
      return;
    }

    // Track user activity
    const handleActivity = () => {
      resetIdleTimer();
    };

    // Add event listeners for user activity
    const events = [
      'mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'
    ];

    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Start the idle timer
    resetIdleTimer();

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (activityTimeoutRef.current) {
        clearTimeout(activityTimeoutRef.current);
      }
      if (spinIntervalRef.current) {
        clearInterval(spinIntervalRef.current);
      }
    };
  }, [country]);

  // Don't render if not in Nigeria or not idle
  if (country !== 'NG' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 pointer-events-none z-50 flex flex-col items-center">
      <div className="nigeria-flag-splash">
        <div className={`flag-container ${isSpinning ? 'spinning' : ''}`}>
          <div className="nigeria-flag">
            <div className="flag-left"></div>
            <div className="flag-center"></div>
            <div className="flag-right"></div>
          </div>
        </div>
      </div>
      <div className="naija-text mt-2 text-green-600 font-bold text-sm animate-pulse">
        Naija go better
      </div>
      
      <style jsx>{`
        .nigeria-flag-splash {
          animation: fadeIn 0.8s ease-out;
        }

        .flag-container {
          transform-style: preserve-3d;
          perspective: 1000px;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .flag-container.spinning {
          animation: spin3d 400ms linear;
          animation-iteration-count: 1;
        }

        .nigeria-flag {
          width: 80px;
          height: 40px;
          display: flex;
          position: relative;
          transform-style: preserve-3d;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          will-change: transform;
          backface-visibility: hidden;
        }

        .flag-left,
        .flag-right {
          width: 40%;
          background: linear-gradient(135deg, #008751 0%, #006640 100%);
          position: relative;
          transform: translateZ(0);
        }

        .flag-center {
          width: 20%;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          position: relative;
          transform: translateZ(0);
        }

        .flag-left::before,
        .flag-right::before,
        .flag-center::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          animation: shimmer 4s ease-in-out infinite;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        @keyframes spin3d {
          0% {
            transform: rotateY(0deg) translateZ(0);
          }
          100% {
            transform: rotateY(360deg) translateZ(0);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%) translateZ(0);
            opacity: 0;
          }
          50% {
            transform: translateX(100%) translateZ(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateZ(0);
          }
          to {
            opacity: 1;
            transform: scale(1) translateZ(0);
          }
        }

        @media (max-width: 768px) {
          .nigeria-flag {
            width: 60px;
            height: 30px;
          }
          
          .naija-text {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NigeriaFlagSplash;
