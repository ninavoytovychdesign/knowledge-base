"use client";
import React, { useRef, useEffect, useState } from "react";

export function PixelatedCanvas({
  src,
  width = 400,
  height = 500,
  cellSize = 3,
  dotScale = 0.9,
  shape = "square",
  backgroundColor = "#000000",
  dropoutStrength = 0.4,
  interactive = false,
  distortionStrength = 3,
  distortionRadius = 80,
  distortionMode = "swirl",
  followSpeed = 0.2,
  jitterStrength = 4,
  jitterSpeed = 4,
  sampleAverage = true,
  tintColor = "#FFFFFF",
  tintStrength = 0.2,
  className = "",
}) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    if (!canvas || !ctx) return;

    canvas.width = width;
    canvas.height = height;

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      setIsLoaded(true);
      drawPixelated();
    };
    image.src = src;
    imageRef.current = image;

    function drawPixelated() {
      if (!imageRef.current || !isLoaded) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      const cols = Math.floor(width / cellSize);
      const rows = Math.floor(height / cellSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const pixelX = x * cellSize;
          const pixelY = y * cellSize;

          // Apply distortion if interactive
          let distX = x;
          let distY = y;
          
          if (interactive) {
            const dx = mousePos.x - pixelX;
            const dy = mousePos.y - pixelY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < distortionRadius) {
              const strength = (1 - distance / distortionRadius) * distortionStrength;
              
              if (distortionMode === "swirl") {
                const angle = Math.atan2(dy, dx) + strength * 0.1;
                const newDistance = distance * (1 - strength * 0.1);
                distX = mousePos.x + Math.cos(angle) * newDistance;
                distY = mousePos.y + Math.sin(angle) * newDistance;
              } else {
                distX += dx * strength * 0.01;
                distY += dy * strength * 0.01;
              }
            }
          }

          // Sample color from image
          const imageX = Math.floor((distX / width) * imageRef.current.width);
          const imageY = Math.floor((distY / height) * imageRef.current.height);
          
          if (imageX >= 0 && imageX < imageRef.current.width && 
              imageY >= 0 && imageY < imageRef.current.height) {
            
            const imageData = ctx.createImageData(1, 1);
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = imageRef.current.width;
            tempCanvas.height = imageRef.current.height;
            tempCtx.drawImage(imageRef.current, 0, 0);
            
            const pixelData = tempCtx.getImageData(imageX, imageY, 1, 1).data;
            
            let r = pixelData[0];
            let g = pixelData[1];
            let b = pixelData[2];
            let a = pixelData[3];

            // Apply dropout
            if (Math.random() < dropoutStrength) {
              r = g = b = 0;
              a = 0;
            }

            // Apply tint
            if (tintColor !== "#FFFFFF") {
              const tintR = parseInt(tintColor.slice(1, 3), 16);
              const tintG = parseInt(tintColor.slice(3, 5), 16);
              const tintB = parseInt(tintColor.slice(5, 7), 16);
              
              r = r + (tintR - r) * tintStrength;
              g = g + (tintG - g) * tintStrength;
              b = b + (tintB - b) * tintStrength;
            }

            // Apply jitter
            if (jitterStrength > 0) {
              const jitterX = (Math.random() - 0.5) * jitterStrength;
              const jitterY = (Math.random() - 0.5) * jitterStrength;
              
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
              
              if (shape === "circle") {
                ctx.beginPath();
                ctx.arc(
                  pixelX + cellSize / 2 + jitterX,
                  pixelY + cellSize / 2 + jitterY,
                  (cellSize * dotScale) / 2,
                  0,
                  2 * Math.PI
                );
                ctx.fill();
              } else {
                ctx.fillRect(
                  pixelX + jitterX,
                  pixelY + jitterY,
                  cellSize * dotScale,
                  cellSize * dotScale
                );
              }
            } else {
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
              
              if (shape === "circle") {
                ctx.beginPath();
                ctx.arc(
                  pixelX + cellSize / 2,
                  pixelY + cellSize / 2,
                  (cellSize * dotScale) / 2,
                  0,
                  2 * Math.PI
                );
                ctx.fill();
              } else {
                ctx.fillRect(
                  pixelX,
                  pixelY,
                  cellSize * dotScale,
                  cellSize * dotScale
                );
              }
            }
          }
        }
      }
    }

    // Animation loop
    let animationId;
    function animate() {
      drawPixelated();
      animationId = requestAnimationFrame(animate);
    }
    
    if (interactive) {
      animate();
    } else {
      drawPixelated();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [src, width, height, cellSize, dotScale, shape, backgroundColor, dropoutStrength, interactive, distortionStrength, distortionRadius, distortionMode, followSpeed, jitterStrength, jitterSpeed, sampleAverage, tintColor, tintStrength, isLoaded, mousePos]);

  const handleMouseMove = (e) => {
    if (!interactive) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onMouseMove={handleMouseMove}
      style={{ cursor: interactive ? "crosshair" : "default" }}
    />
  );
}
