"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LinkPreview({ children, url, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <span
        className={`cursor-pointer hover:underline ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
          >
            <div className="bg-[#141414] border border-[#1A1A1A] rounded-lg shadow-xl p-4 w-80 max-w-sm">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <img
                    src="/podcast.png"
                    alt="Podcast Episode"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white truncate">
                      Junior Diary Podcast
                    </h3>
                    <p className="text-xs text-[#CCCCCC] mt-1 line-clamp-2">
                      Guest appearance discussing UI/UX design
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-[#777777]">
                  <span>spotify.com</span>
                  <span className="text-green-500">▶ Play</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
