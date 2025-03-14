import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('interactive-hover')
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className={`cursor-glow ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorGlow;