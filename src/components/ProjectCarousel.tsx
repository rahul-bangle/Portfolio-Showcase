import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { useGSAP } from '@gsap/react';
import './ProjectCarousel.css';

gsap.registerPlugin(Draggable, InertiaPlugin);

interface ProjectCarouselProps {
  images: string[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollX = useRef(0);

  useGSAP(() => {
    if (!carouselRef.current || !containerRef.current) return;

    const carousel = carouselRef.current;
    const items = Array.from(carousel.children) as HTMLElement[];
    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? 200 : 280; // Smaller spacing on mobile

    const updateItems = (x: number) => {
      const centerXOffset = (items.length - 1) * spacing / 2;
      items.forEach((item, i) => {
        // Calculate horizontal position relative to center
        const itemOffset = (i * spacing) - centerXOffset + x;

        // Tilt logic: items tilt toward the center
        const tilt = gsap.utils.clamp(-60, 60, itemOffset * -0.15);

        // Depth logic: items recede as they move away from center
        const distance = Math.abs(itemOffset);
        const yOffset = distance * 0.2; // sides neeche
        const z = -distance * 1.2;
        const opacity = gsap.utils.mapRange(0, 1000, 1, 0, distance);
        const scale = gsap.utils.mapRange(0, 600, 1, 0.8, distance);

        gsap.set(item, {
          x: itemOffset,
          y: yOffset,
          rotateY: tilt,
          z: z,
          scale: scale,
          opacity: opacity,
          zIndex: Math.round(1000 - distance),
          display: distance > 900 ? 'none' : 'block'
        });
      });
    };

    // Initial position
    updateItems(0);

    Draggable.create(document.createElement("div"), {
      type: "x",
      trigger: containerRef.current,
      inertia: true,
      onDrag: function () {
        scrollX.current += this.deltaX;
        updateItems(scrollX.current);
      },
      onThrowUpdate: function () {
        scrollX.current += this.deltaX;
        updateItems(scrollX.current);
      }
    });

    // Gentle auto-drift
    let ticker = gsap.ticker.add(() => {
      scrollX.current += 0.5; // speed control karo

      // Clamp karo taki gap na aaye
      const maxScroll = (items.length / 2) * spacing;
      if (Math.abs(scrollX.current) > maxScroll) {
        scrollX.current = 0; // reset to center silently
      }

      updateItems(scrollX.current);
    });

    // Cleanup
    return () => gsap.ticker.remove(ticker);

  }, { scope: containerRef, dependencies: [images] });

  return (
    <div className="carousel-3d-scene" ref={containerRef}>
      <div className="light-beam"></div>
      <div className="carousel-3d-stage" ref={carouselRef}>
        {images.map((img, i) => (
          <div key={i} className="carousel-3d-item">
            <div className="phone-mockup-mini">
              <div className="phone-screen">
                <img src={img} alt={`Screen ${i + 1}`} />
              </div>
              <div className="phone-reflection">
                <img src={img} alt={`Reflection ${i + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
