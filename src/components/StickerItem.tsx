import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StickerItem.css';

interface StickerItemProps {
  src: string;
  label: string;
  tooltip: string;
  x: string;
  y: string;
  rotate: number;
}

const StickerItem: React.FC<StickerItemProps> = ({ src, label, tooltip, x, y, rotate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="sticker-item-wrapper"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0, rotate }}
      animate={{ scale: 1, opacity: 1, rotate }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: Math.random() * 0.5 
      }}
    >
      <div 
        className="sticker-interaction-zone"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="sticker-image-container"
          whileHover={{ scale: 1.1, rotate: rotate + (Math.random() > 0.5 ? 5 : -5) }}
        >
          <img src={src} alt={label} className="sticker-img" />
        </motion.div>

        <div className={`sticker-label ${isHovered ? 'active' : ''}`}>
          {label}
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="sticker-tooltip"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
            >
              <div className="tooltip-content">
                {tooltip}
              </div>
              <div className="tooltip-arrow" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StickerItem;
