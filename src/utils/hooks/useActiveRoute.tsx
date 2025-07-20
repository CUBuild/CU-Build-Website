import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from '../data/colors';

const useActiveRoute = (path: string) => {
  const location = useLocation();
  const colorsArray = [...Object.values(colors)];
  const [color, setColor] = useState(colors.pink);

  useEffect(() => {
    let currentIndex = 0;

    if (location.pathname === path) {
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % colorsArray.length;
        setColor(colorsArray[currentIndex]);
      }, 3000); // Change color every 3 seconds

      return () => clearInterval(interval);
    }
  }, [location.pathname, path]);

  return {
    isActive: location.pathname === path,
    activeColor: color,
  };
};

export default useActiveRoute;
