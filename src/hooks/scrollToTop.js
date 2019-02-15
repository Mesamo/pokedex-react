import { useEffect } from 'react';

export function scrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
