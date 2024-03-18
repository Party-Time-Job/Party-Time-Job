import { useEffect } from 'react';

const useBack = (onClick: () => void) => {
  useEffect(() => {
    const handleBack = () => {
      window.history.pushState(null, document.title, window.location.href);
      onClick();
    };
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handleBack);
    return window.removeEventListener('popstate', handleBack);
  }, [onClick]);
};

export default useBack;
