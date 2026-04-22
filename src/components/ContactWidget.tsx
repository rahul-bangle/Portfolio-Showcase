import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactWidget.css';

export const ContactWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fullHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Show when user has scrolled 30% of the page or near the bottom
      if (scrollY > (fullHeight - windowHeight) * 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="contact-widget-container"
          initial={{ y: 100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          exit={{ y: 100, x: '-50%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="contact-widget">
            <span className="widget-text">Still here?</span>
            <div className="widget-avatar-wrapper">
              <motion.span 
                className="widget-emoji"
                animate={{ 
                  rotate: [0, 20, 0, 20, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                👋
              </motion.span>
            </div>
            <a href="mailto:bangleahul1@gmail.com" className="widget-link">
              Let's Work Together
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
