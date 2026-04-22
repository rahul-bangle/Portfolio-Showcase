import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './MyWorldCanvas.css';
import StickerItem from './StickerItem';

const stickers = [
  {
    id: 'rahul',
    src: '/my-world/rahul_sticker.png',
    label: "That's Me!",
    tooltip: "PM by day, world explorer by... well, also by day.",
    x: '50%',
    y: '50%',
    rotate: -5
  },
  {
    id: 'bridge',
    src: '/my-world/bridge.png',
    label: "Where she said yes!",
    tooltip: "A memory etched in iron and stone at Biderfort.",
    x: '68%',
    y: '32%',
    rotate: 8
  },
  {
    id: 'bgmi',
    src: '/my-world/bgmi.png',
    label: "BGMI",
    tooltip: "Winner Winner Chicken Dinner! (Sometimes)",
    x: '30%',
    y: '65%',
    rotate: -12
  },
  {
    id: 'biryani',
    src: '/my-world/biryani.png',
    label: "Biryani",
    tooltip: "If you're from Swiggy or Zomato, please send me some!",
    x: '55%',
    y: '78%',
    rotate: 15
  },
  {
    id: 'chai',
    src: '/my-world/chai.png',
    label: "Chai",
    tooltip: "The Jethalal in me cannot resist Chai.",
    x: '35%',
    y: '28%',
    rotate: 10
  },
  {
    id: 'kishore',
    src: '/my-world/kishore_kumar.png',
    label: "Kishore Kumar",
    tooltip: "The voice that makes everything better. Timeless melodies for every mood.",
    x: '78%',
    y: '58%',
    rotate: -5
  },
  {
    id: 'samsung',
    src: '/my-world/samsung_s26.png',
    label: "Samsung S26 Ultra",
    tooltip: "Currently plotting an upgrade. The grind continues.",
    x: '22%',
    y: '42%',
    rotate: 5
  }
];

const MyWorldCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for panning
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth springs for panning
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section className="my-world-section" id="my-world">
      <div className="section-header">
        <span className="section-tag">PERSONAL</span>
        <h2 className="section-title">My World</h2>
        <p className="section-subtitle">a short snapshot of things I need to function in this world.</p>
        <p className="section-hint">Hold and drag to move around the canvas.</p>
      </div>

      <div className="canvas-viewport" ref={containerRef}>
        <motion.div 
          className="canvas-container"
          drag
          dragMomentum={true}
          dragTransition={{ power: 0.1, timeConstant: 200 }}
          dragConstraints={containerRef}
          whileTap={{ cursor: 'grabbing' }}
        >
          {/* Subtle grid background */}
          <div className="canvas-grid" />
          
          {stickers.map((sticker) => (
            <StickerItem 
              key={sticker.id}
              {...sticker}
            />
          ))}
        </motion.div>
      </div>

      <div className="canvas-instruction">
        <span>Click and drag to explore my world</span>
      </div>
    </section>
  );
};

export default MyWorldCanvas;
