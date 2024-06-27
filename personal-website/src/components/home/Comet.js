import React from 'react';
import { motion } from 'framer-motion';

const Comet = ({ startX, startY, controlX, controlY, endX, endY, duration, delay, width, height }) => {
  // Convert percentage values to absolute values based on the SVG container's dimensions
  const convertToAbsolute = (value, dimension) => (parseFloat(value) / 100) * dimension;

  // Adjust control point to make the path slightly curved
  const adjustedControlX = (convertToAbsolute(startX, width) + convertToAbsolute(endX, width)) / 2 + (convertToAbsolute(controlX, width) - convertToAbsolute(startX, width)) * 0.1;
  const adjustedControlY = (convertToAbsolute(startY, height) + convertToAbsolute(endY, height)) / 2 + (convertToAbsolute(controlY, height) - convertToAbsolute(startY, height)) * 0.1;

  const pathData = `M${convertToAbsolute(startX, width)},${convertToAbsolute(startY, height)} Q${adjustedControlX},${adjustedControlY} ${convertToAbsolute(endX, width)},${convertToAbsolute(endY, height)}`;
  console.log('Comet path data:', pathData); // Debug log

  return (
    <motion.svg
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, left: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: duration, delay: delay, repeat: Infinity }}
    >
      <defs>
        <linearGradient id={`comet-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="lightblue" stopOpacity="1" />
          <stop offset="100%" stopColor="blue" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={pathData}
        fill="none"
        stroke={`url(#comet-gradient-${delay})`}
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default Comet;
