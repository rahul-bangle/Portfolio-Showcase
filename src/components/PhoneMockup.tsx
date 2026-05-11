import React from 'react';
import { motion } from 'framer-motion';
import './PhoneMockup.css';
import phoneFrame from '../assets/projects/sprout/phone-frame.png';
import redesignVideo from '../assets/projects/sprout/redesign-video.mp4';
import img2 from '../assets/projects/sprout/details/img2.png';
import img3 from '../assets/projects/sprout/details/img3.png';

export const PhoneMockup: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hasEntered, setHasEntered] = React.useState(false);

  const attemptPlay = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        await videoRef.current.play();
      } catch (err) {
        // Silently fail as it will retry on click
      }
    }
  };

  React.useEffect(() => {
    if (hasEntered) {
      attemptPlay();
    }
  }, [hasEntered]);

  // Global click listener as a fail-safe
  React.useEffect(() => {
    const handleGlobalClick = () => {
      attemptPlay();
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="showcase-dashboard-container">
      <div className="showcase-main-content">
        {/* Left Column: Massive Phone Card */}
        <motion.div 
          className="showcase-card phone-card"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          onAnimationComplete={() => setHasEntered(true)}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        >
          <div className="card-header">
            <span className="card-label">Product Interaction</span>
            <h3 className="card-title">Redesign Showcase</h3>
          </div>
          <div className="phone-frame-wrapper">
            <img src={phoneFrame} alt="Phone Frame" className="phone-frame-img" />
            <div className="phone-screen-content">
              <video 
                ref={videoRef}
                className="redesign-video"
                src={redesignVideo}
                loop 
                muted 
                playsInline
                autoPlay
                preload="auto"
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onLoadedData={() => {
                  if (hasEntered) attemptPlay();
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="phone-glare"></div>
          </div>
        </motion.div>

        {/* Right Column: Stacked Feature Cards */}
        <div className="showcase-right-column">
          <motion.div 
            className="showcase-card feature-card small"
            initial={{ scale: 0.9, opacity: 0, x: 30 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="card-header">
              <span className="card-label">Automation</span>
              <h3 className="card-title">One-Click Application</h3>
            </div>
            <div className="feature-img-container">
              <img src={img2} alt="Feature 1" className="feature-card-img" />
            </div>
          </motion.div>

          <motion.div 
            className="showcase-card feature-card large"
            initial={{ scale: 0.9, opacity: 0, x: 30 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          >
            <div className="card-header">
              <span className="card-label">Monetization</span>
              <h3 className="card-title">Premium Monetization</h3>
            </div>
            <div className="feature-img-container">
              <img src={img3} alt="Feature 2" className="feature-card-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
