import { useRef, useState, useCallback, useEffect } from 'react';
import './SpotlightCard.css';

function useSpotlightEnabled() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return enabled;
}

const glowColorMap = {
  blue: { inner: 'rgba(59, 130, 246, 0.55)', outer: 'rgba(96, 165, 250, 0.2)', border: '#3b82f6', borderOuter: '#60a5fa' },
  purple: { inner: 'rgba(82, 39, 255, 0.5)', outer: 'rgba(139, 92, 246, 0.22)', border: '#5227FF', borderOuter: '#8B5CF6' },
  green: { inner: 'rgba(34, 197, 94, 0.55)', outer: 'rgba(74, 222, 128, 0.2)', border: '#22c55e', borderOuter: '#4ade80' },
  red: { inner: 'rgba(239, 68, 68, 0.55)', outer: 'rgba(248, 113, 113, 0.2)', border: '#ef4444', borderOuter: '#f87171' },
  orange: { inner: 'rgba(249, 115, 22, 0.55)', outer: 'rgba(251, 146, 60, 0.2)', border: '#f97316', borderOuter: '#fb923c' },
};

export default function SpotlightCard({
  children,
  className = '',
  glowColor = 'purple',
  width,
  height,
}) {
  const cardRef = useRef(null);
  const colors = glowColorMap[glowColor] ?? glowColorMap.purple;
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });
  const spotlightEnabled = useSpotlightEnabled();

  const handlePointerMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, active: false }));
  }, []);

  const containerStyle = {
    ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
  };

  const glowStyle = glow.active
    ? {
        opacity: 1,
        background: `radial-gradient(140px circle at ${glow.x}px ${glow.y}px, ${colors.inner} 0%, ${colors.outer} 45%, transparent 72%)`,
      }
    : { opacity: 0 };

  const borderStyle = glow.active
    ? {
        opacity: 1,
        background: `radial-gradient(100px circle at ${glow.x}px ${glow.y}px, ${colors.border} 0%, ${colors.borderOuter} 42%, transparent 70%)`,
      }
    : { opacity: 0 };

  return (
    <div
      ref={cardRef}
      style={containerStyle}
      className={`spotlight-card ${className}`}
      onPointerMove={spotlightEnabled ? handlePointerMove : undefined}
      onPointerLeave={spotlightEnabled ? handlePointerLeave : undefined}
    >
      <div className="spotlight-card__content">{children}</div>
      {spotlightEnabled && (
        <>
          <div className="spotlight-card__glow" style={glowStyle} aria-hidden />
          <div className="spotlight-card__border" style={borderStyle} aria-hidden />
        </>
      )}
    </div>
  );
}
