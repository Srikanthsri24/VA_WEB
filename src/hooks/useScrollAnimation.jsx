import { useEffect, useRef, useState, useCallback } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px'
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return { ref: elementRef, isVisible };
};

// Hook for multiple elements
export const useScrollAnimationGroup = (count, options = {}) => {
  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());

  const setRef = useCallback((index) => (el) => {
    refs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (index === -1) return;

          setVisibleItems((prev) => {
            const next = new Set(prev);
            if (entry.isIntersecting) {
              next.add(index);
            } else if (!options.triggerOnce) {
              next.delete(index);
            }
            return next;
          });
        });
      },
      { 
        threshold: options.threshold || 0.1, 
        rootMargin: options.rootMargin || '0px 0px -30px 0px' 
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [count, options.threshold, options.rootMargin, options.triggerOnce]);

  return { setRef, isVisible: (index) => visibleItems.has(index) };
};

export default useScrollAnimation;