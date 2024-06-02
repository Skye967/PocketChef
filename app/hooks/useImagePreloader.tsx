// hooks/useImagePreloader.tsx
import { useState, useEffect } from 'react';

const useImagePreloader = (imageCount: number) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (loadedImages === imageCount) {
      setAllLoaded(true);
    }
  }, [loadedImages, imageCount]);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  return { allLoaded, handleImageLoad };
};

export default useImagePreloader;
