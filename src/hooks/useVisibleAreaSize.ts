import { useState, useEffect } from 'react';

import { VisibleAreaSize } from '../models/VisibleAreaSize';

function getVisibleArea(itemWidth: number, topOffset: number) {
  const height = window.innerHeight - topOffset;
  const width = window.innerWidth;
  return new VisibleAreaSize(height, width, itemWidth);
}

export function useVisableAreaSize(itemWidth: number, topOffset: number = 0) {
  const [visibleAreaSize, setVisableAreaSize] = useState(
    getVisibleArea(itemWidth, topOffset)
  );

  function handleResize() {
    setVisableAreaSize(getVisibleArea(itemWidth, topOffset));
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visibleAreaSize;
}
