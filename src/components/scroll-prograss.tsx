// components/ScrollProgressBar.tsx

"use client";
import { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const totalHeight = scrollHeight - clientHeight;
      const scrolled = (scrollTop / totalHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize progress bar on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[100px] w-1 rounded-lg bg-gray-200 z-50">
      <div
        className="bg-black w-full rounded-lg"
        style={{ height: `${scrollPercent}%`, maxHeight: '100px' }}
      />
      
    </div>
  );
};

export default ScrollProgressBar;
