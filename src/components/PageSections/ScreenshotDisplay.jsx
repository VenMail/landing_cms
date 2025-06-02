import Image from "next/image";

export default function ScreenshotDisplay({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  showBackground = true 
}) {
  const baseContainerClasses = showBackground 
    ? "bg-[#f9f1ef] p-6 sm:p-8 md:p-10 rounded-lg" 
    : "p-6 sm:p-8 md:p-10";
  
  const baseImageClasses = "w-full rounded-lg shadow-sm transition-all duration-300";

  return (
    <div className={`${baseContainerClasses} ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`${baseImageClasses} ${className}`}
      />
    </div>
  );
} 