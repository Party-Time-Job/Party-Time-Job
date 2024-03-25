import { useEffect, useRef } from 'react';

const useCustomNoticeScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const autoScroll = () => {
      let toScroll = 328;
      if (window.innerWidth < 768) {
        toScroll = 176;
      }

      if (containerRef.current) {
        const container = containerRef.current;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        let newScrollLeft = container.scrollLeft + toScroll;

        console.log(scrollWidth - container.scrollLeft);

        if (scrollWidth - container.scrollLeft < toScroll) {
          container.scrollTop = container.scrollLeft;
        }

        if (scrollWidth - container.scrollLeft <= 0) {
          newScrollLeft = 0;
        }

        container.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }
    };

    const intervalId = setInterval(autoScroll, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return containerRef;
};

export default useCustomNoticeScroll;
