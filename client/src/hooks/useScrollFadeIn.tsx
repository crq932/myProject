/* eslint-disable indent */
import { useRef, useCallback, useLayoutEffect } from "react";

interface Props {
  direction: string;
  duration: number;
  delay: number;
}

interface returnType {
  ref: React.RefObject<HTMLDivElement>;
  style: InitialStyleType;
}

interface InitialStyleType {
  opacity: number;
  transform?: string;
}

const useScrollFadeIn = ({ direction, duration, delay }: Props): returnType => {
  const element = useRef<HTMLDivElement>(null);

  const onDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 20px, 0)";
      case "down":
        return "translate3d(0, -50px, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-30px, 0, 0)";
      default:
        return;
    }
  };

  const onScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const { current }: React.RefObject<HTMLDivElement> = element;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useLayoutEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current as unknown as Element);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: onDirection(direction) },
  };
};

export default useScrollFadeIn;
