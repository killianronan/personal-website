import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './TracingBeam.css';

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [scrollRange, setScrollRange] = useState([0, 1]);

  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);

        // Adjust scroll range based on screen height
        const vh = window.innerHeight;
        const contentHeight = contentRef.current.offsetHeight;
        const range = contentHeight / vh > 1 ? [0, contentHeight / vh] : [0, 1];
        setScrollRange(range);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  // Calculate the y1 factor based on screen width
  const screenWidth = window.innerWidth;
  const y1Factor = screenWidth > 1200 ? 3 : screenWidth > 800 ? 4 : 5;
  const y1 = useSpring(useTransform(scrollYProgress, [0, scrollRange[1] / y1Factor], [20, svgHeight - 20]), {
    stiffness: 500,
    damping: 90
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, scrollRange[1]], [0, svgHeight]), {
    stiffness: 500,
    damping: 90
  });

  return (
    <motion.div ref={ref} className={`relative w-full max-w-5xl mx-auto h-full ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 tracing-beam-left">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-2 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.6} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.15"
            transition={{
              duration: 10
            }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.6} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10
            }}
          />
          <circle cx="15" cy="5" r="5" fill="#AE48FF" />
          <circle cx="5" cy={svgHeight - 20} r="5" fill="#18CCFC" />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0.5" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 tracing-beam-right">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="mr-2 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 19 0V -36 l -18 24 V ${svgHeight * 0.6} l 18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10
            }}
          />
          <motion.path
            d={`M 19 0V -36 l -18 24 V ${svgHeight * 0.6} l 18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient-right)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10
            }}
          />
          <circle cx="5" cy="5" r="5" fill="#AE48FF"/>
          <circle cx="15" cy={svgHeight - 20} r="5" fill="#18CCFC" />
          <defs>
            <motion.linearGradient
              id="gradient-right"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0.5" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
