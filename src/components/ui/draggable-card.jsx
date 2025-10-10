"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const DraggableCardContainer = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export const DraggableCardBody = ({ children, className }) => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(springY, [-100, 100], [30, -30]);
  const rotateY = useTransform(springX, [-100, 100], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      className={`cursor-grab active:cursor-grabbing ${className}`}
      drag
      dragElastic={0.1}
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        z: isDragging ? 100 : 0,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileHover={{ 
        scale: 1.05,
        z: 50,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 1.1,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <div className="relative rounded-xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

