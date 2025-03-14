import React, { useEffect, useState } from 'react';

const CursorGrid: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none inset-0 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        maskImage: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, black, transparent)`,
        WebkitMaskImage: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, black, transparent)`,
      }}
    >
      <div className="absolute inset-0 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black/80" />
      </div>
    </div>
  );
};

export default CursorGrid;