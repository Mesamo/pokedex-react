import { useEffect } from 'react';

export function windowScroll() {
  const onScroll = () => {
    console.log('scroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);
}
