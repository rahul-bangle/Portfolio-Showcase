import React from 'react';
import { motion } from 'framer-motion';
import './Annotation.css';

interface AnnotationProps {
  text: string;
  arrowType?: 'curly' | 'loop' | 'simple';
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  style?: React.CSSProperties;
}

export const Annotation: React.FC<AnnotationProps> = ({ 
  text, 
  arrowType = 'curly', 
  direction = 'right', 
  className = '',
  style
}) => {
  // SVG Paths for hand-drawn look
  const paths = {
    curly: "M10,80 C30,80 40,20 90,50 M90,50 L75,35 M90,50 L75,65",
    loop: "M10,50 C30,10 60,10 50,50 C40,90 70,90 90,50 M90,50 L75,35 M90,50 L75,65",
    simple: "M10,50 Q50,10 90,50 M90,50 L75,35 M90,50 L75,65"
  };

  const rotations = {
    right: 0,
    left: 180,
    up: -90,
    down: 90
  };

  return (
    <div className={`annotation-container ${className}`} style={style}>
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="annotation-text"
      >
        {text}
      </motion.div>
      <div className="annotation-arrow-box" style={{ transform: `rotate(${rotations[direction]}deg)` }}>
        <svg viewBox="0 0 100 100" className="annotation-svg">
          <motion.path
            d={paths[arrowType]}
            fill="transparent"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
    </div>
  );
};
