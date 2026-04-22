import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import './ComparisonCanvas.css';

// Use Vite's glob import to get all images dynamically
const originalImages = import.meta.glob('../assets/projects/sprout/original/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, as: 'url' });
const redesignImages = import.meta.glob('../assets/projects/sprout/redesign/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, as: 'url' });
const compositeImages = import.meta.glob('../assets/projects/sprout/redesign-composite.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, as: 'url' });

const originalUrls = Object.values(originalImages).map(module => module as string);
const redesignUrls = Object.values(redesignImages).map(module => module as string);
const compositeUrls = Object.values(compositeImages).map(module => module as string);
const compositeImage = compositeUrls.length > 0 ? compositeUrls[0] : null;

export const ComparisonCanvas: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: globalThis.TouchEvent) => handleMove(e.touches[0].clientX);

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Seeded random generator for reproducible "messy" positioning
  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  // Create placeholders if no actual images exist yet
  const hasOriginals = originalUrls.length > 0;
  const hasRedesigns = redesignUrls.length > 0;
  
  const chaoticCount = hasOriginals ? originalUrls.length : 31;
  const orderCount = hasRedesigns ? redesignUrls.length : 8;

  return (
    <div 
      className="comparison-canvas" 
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* BEFORE LAYER: The Chaos (31 Original Screens) */}
      <div className="layer-before messy-desk-container">
        {Array.from({ length: chaoticCount }).map((_, i) => {
          // Generate "random" but fixed positions between 10% and 90%
          const top = 10 + pseudoRandom(i * 10) * 60;
          const left = 5 + pseudoRandom(i * 20) * 80;
          const rotate = -30 + pseudoRandom(i * 30) * 60;
          const zIndex = Math.floor(pseudoRandom(i * 40) * 31);
          
          return hasOriginals ? (
            <img 
              key={i}
              src={originalUrls[i]} 
              alt={`Original step ${i}`}
              className="messy-screen"
              style={{ top: `${top}%`, left: `${left}%`, transform: `rotate(${rotate}deg)`, zIndex }}
              draggable={false}
            />
          ) : (
            <div
              key={i}
              className="messy-screen"
              style={{
                top: `${top}%`, left: `${left}%`, transform: `rotate(${rotate}deg)`, zIndex,
                background: `hsl(${pseudoRandom(i) * 360}, 70%, 90%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#555'
              }}
            >
              Step {i+1}
            </div>
          );
        })}
        {/* Label for Before side */}
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.8)', padding: '0.5rem 1rem', borderRadius: '100px', fontWeight: 'bold', zIndex: 100, color: '#1a1a1a', border: '1px solid rgba(0,0,0,0.1)' }}>
          Before: 31 Steps of Friction
        </div>
      </div>

      {/* AFTER LAYER: The Order (8 Redesign Screens) */}
      <div 
        className="layer-after"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <div className="order-track-container">
          {compositeImage ? (
            <img src={compositeImage} alt="Sprout Redesign Composite" className="order-screen-composite" draggable={false} />
          ) : Array.from({ length: orderCount }).map((_, i) => (
            hasRedesigns ? (
              <img 
                key={i}
                src={redesignUrls[i]} 
                alt={`Redesign step ${i}`}
                className="order-screen"
                draggable={false}
              />
            ) : (
              <div 
                key={i}
                className="order-screen"
                style={{
                  background: '#f8f9fa',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#555'
                }}
              >
                Clean {i+1}
              </div>
            )
          ))}
        </div>
        {/* Label for After side */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(26,26,26,0.8)', color: 'white', padding: '0.5rem 1rem', borderRadius: '100px', fontWeight: 'bold', zIndex: 100, border: '1px solid rgba(255,255,255,0.1)' }}>
          After: {orderCount} Steps of Clarity
        </div>
      </div>

      {/* SLIDER HANDLE */}
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-button">
          ↔
        </div>
      </div>
    </div>
  );
};

