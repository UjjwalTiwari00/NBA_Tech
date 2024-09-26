"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "../lib/utils";
import { SparklesCore } from "./SparklesCore"; // Yeh component tumhein alag se create karna hoga

export const Cover = ({ children, className }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth ?? 0);
      const height = ref.current.clientHeight ?? 0;
      const numberOfBeams = Math.floor(height / 10);
      const positions = Array.from(
        { length: numberOfBeams },
        (_, i) => (i + 1) * (height / (numberOfBeams + 1))
      );
      setBeamPositions(positions);
    }
  }, [ref.current]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className="relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-sm">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full overflow-hidden absolute inset-0">
            <motion.div
              animate={{ translateX: ["-50%", "0%"] }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              className="w-[200%] h-full flex">
              <SparklesCore background="transparent" minSize={0.4} maxSize={1} particleDensity={500} className="w-full h-full" particleColor="#FFFFFF" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {beamPositions.map((position, index) => (
        <Beam key={index} hovered={hovered} width={containerWidth} style={{ top: `${position}px` }} />
      ))}
      <motion.span
        animate={{ scale: hovered ? 0.8 : 1 }}
        className={cn("dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200", className)}>
        {children}
      </motion.span>
    </div>
  );
};
export const Beam = ({ hovered, width }) => {
    const id = useId();
  
    return (
      <motion.svg width={width} height="1" viewBox={`0 0 ${width} 1`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d={`M0 0.5H${width}`} stroke={`url(#svgGradient-${id})`} />
        <defs>
          <motion.linearGradient
            id={`svgGradient-${id}`}
            gradientUnits="userSpaceOnUse"
            animate={{ x1: "110%", x2: hovered ? "100%" : "105%" }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}>
            <stop stopColor="#2EB9DF" stopOpacity="0" />
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </motion.svg>
    );
  };
  export const CircleIcon = ({ className }) => {
    return (
      <div className={cn(`h-2 w-2 rounded-full bg-neutral-600 opacity-20 ${className}`)}></div>
    );
  };
  