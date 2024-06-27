import React from 'react';
import { motion } from 'framer-motion';
import Comet from './Comet';

const generateRandomStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2;
    const duration = Math.random() * 5 + 2;
    stars.push(
      <motion.circle
        key={i}
        cx={`${Math.random() * 100}%`}
        cy={`${Math.random() * 100}%`}
        r={size}
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: duration, repeat: Infinity }}
      />
    );
  }
  return stars;
};

const generateRandomComets = (numComets, width, height) => {
  const comets = [];
  for (let i = 0; i < numComets; i++) {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const controlX = startX + (Math.random() * 10 - 5); // Slightly adjust control points
    const controlY = startY + (Math.random() * 10 - 5);
    const endX = startX + (Math.random() * 20 - 10);
    const endY = startY + (Math.random() * 20 - 10);
    const duration = Math.random() * 5 + 3;
    const delay = Math.random() * 10;

    comets.push(
      <Comet
        key={i}
        startX={`${startX}%`}
        startY={`${startY}%`}
        controlX={`${controlX}%`}
        controlY={`${controlY}%`}
        endX={`${endX}%`}
        endY={`${endY}%`}
        duration={duration}
        delay={delay}
        width={width}
        height={height}
      />
    );
  }
  return comets;
};

const SVGAnimation = () => {
  const svgWidth = window.innerWidth;
  const svgHeight = window.innerHeight;

  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex:0 }}>
      {generateRandomStars(200)}
      {generateRandomComets(30, svgWidth, svgHeight)}
    </svg>
  );
};

export default SVGAnimation;
