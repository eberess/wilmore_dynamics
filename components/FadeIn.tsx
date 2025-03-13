import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

const FadeIn: React.FC<FadeInProps> = ({ children, className = '', threshold = 0.1 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { inView } = useInView({
    threshold,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`${className} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

FadeIn.displayName = 'FadeIn';

export default FadeIn; 