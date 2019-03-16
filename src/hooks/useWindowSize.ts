import { useState, useEffect } from 'react';

import { ElementSize } from '../models/ElementSize';

export function useWindowSize(): ElementSize {

  const [size, setSize] = useState(new ElementSize(window.innerHeight, window.innerWidth));

  useEffect(() => {
    const listener = () => {
      setSize(new ElementSize(window.innerHeight, window.innerWidth));
    };

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener);
    }
  }, []);

  return size;
}
