// src/hooks/useUACarousel.ts
import { useState, useEffect, useCallback } from "react";

interface UACarouselOptions {
  totalItems: number;
  autoPlay?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
}

export function useUACarousel({ totalItems, autoPlay = false, interval = 5000, pauseOnHover = true }: UACarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!autoPlay || (pauseOnHover && isHovered)) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovered, interval, next, pauseOnHover]);

  return {
    currentIndex,
    direction,
    next,
    prev,
    goTo,
    handlers: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
  };
}