import { useEffect, useState, useRef } from "react";

// Custom hook to use Intersection Observer
export const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting &&
       setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { isVisible, ref };
};
