import { useState, useEffect } from 'react';

export const useScreenAdaptiveWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(360);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setScreenWidth(1920);
      } else if (width >= 1440) {
        setScreenWidth(1440);
      } else if (width >= 1024) {
        setScreenWidth(1024);
      } else if (width >= 768) {
        setScreenWidth(768);
      } else {
        setScreenWidth(360);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
};
