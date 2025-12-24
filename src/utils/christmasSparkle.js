/**
 * Christmas sparkle utility for adding holiday effects
 * Active between December 20th and January 10th
 */

export const isChristmasSeason = () => {
  const now = new Date();
  const year = now.getFullYear();
  
  // Start date: December 20th
  const startDate = new Date(year, 11, 20); // Month is 0-indexed, 11 = December
  
  // End date: January 10th (next year)
  const endDate = new Date(year + 1, 0, 10); // 0 = January
  
  // If we're in January before the 10th, use previous year's start date
  if (now.getMonth() === 0 && now.getDate() <= 10) {
    const prevYearStartDate = new Date(year - 1, 11, 20);
    return now >= prevYearStartDate && now <= endDate;
  }
  
  return now >= startDate && now <= endDate;
};

export const getChristmasClass = () => {
  return isChristmasSeason() ? 'christmas-sparkle' : '';
};

export const ChristmasSparkleWrapper = ({ children, className = '' }) => {
  if (!isChristmasSeason()) {
    return <>{children}</>;
  }
  
  return (
    <div className={`christmas-sparkle ${className}`}>
      {children}
    </div>
  );
};
