import { useEffect } from 'react';

const useNoScroll = (): void => {
  useEffect(() => {
    const handleScroll = (event: Event): void => {
      event.preventDefault();
    };
    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('touchmove', handleScroll, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, []);
};

export default useNoScroll;
