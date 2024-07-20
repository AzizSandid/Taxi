import React, { useEffect, useState, MutableRefObject } from 'react';

interface ScrollIndicatorProps {
  scrollContainerRef: MutableRefObject<HTMLDivElement | null>;
  itemCount: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollContainerRef, itemCount }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.scrollWidth / itemCount;
      scrollContainerRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const itemWidth = scrollContainerRef.current.scrollWidth / itemCount;
        const currentIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(currentIndex);
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainerRef, itemCount]);
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: itemCount }).map((_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={` h-2 rounded-xl ${index === activeIndex ? 'bg-primary w-12' : 'bg-[#D9D9D9] w-3'}`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;