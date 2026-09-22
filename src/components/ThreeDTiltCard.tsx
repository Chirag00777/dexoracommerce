import React, { useRef, useState, MouseEvent } from 'react';

interface ThreeDTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees
  glare?: boolean;
  depth?: number;
  id?: string;
  onClick?: () => void;
}

export const ThreeDTiltCard: React.FC<ThreeDTiltCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  depth = 30,
  id,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}
    >
      <div 
        className="w-full h-full relative" 
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isHovered ? `translateZ(${depth}px)` : 'translateZ(0px)',
          transition: 'transform 0.2s ease-out'
        }}
      >
        {children}
      </div>

      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 220px at ${glarePosition.x}% ${glarePosition.y}%, rgba(251, 191, 36, 0.35), transparent 70%)`,
            zIndex: 30,
          }}
        />
      )}
    </div>
  );
};
