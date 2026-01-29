import { useState, useEffect } from 'react';
import { ChristmasSparkleWrapper } from '@/utils/christmasSparkle';

const MessagingCarousel = () => {
  const messages = [
    'Email that thinks ahead, so you don\'t have to.',
    'One place for email, campaigns, and productivity.'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ChristmasSparkleWrapper className="mb-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
        <span 
          className={`inline-block transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {messages[currentIndex]}
        </span>
      </h1>
    </ChristmasSparkleWrapper>
  );
};

export default MessagingCarousel;
