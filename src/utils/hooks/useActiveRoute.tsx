import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useActiveRoute = (path: string) => {
  const location = useLocation();
  const [color, setColor] = useState('#e31a90');

  useEffect(() => {
    const colors = ['#e31a90', '#613395', '#3baf49', '#52c2ec', '#f6de08'];
    let currentIndex = 0;

    if (location.pathname === path) {
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % colors.length;
        setColor(colors[currentIndex]);
      }, 3000); // Change color every 3 seconds

      return () => clearInterval(interval);
    }
  }, [location.pathname, path]);

  return {
    isActive: location.pathname === path,
    activeColor: color
  };
};

export default useActiveRoute;