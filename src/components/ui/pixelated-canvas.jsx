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
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const image = new Image();
    image.onload = () => {
      console.log("Image loaded:", src);
      setIsLoaded(true);
      
      // Draw simple pixelated effect
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      const cols = Math.floor(width / cellSize);
      const rows = Math.floor(height / cellSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const pixelX = x * cellSize;
          const pixelY = y * cellSize;

          // Sample color from image
          const imageX = Math.floor((pixelX / width) * image.width);
          const imageY = Math.floor((pixelY / height) * image.height);
          
          if (imageX >= 0 && imageX < image.width && 
              imageY >= 0 && imageY < image.height) {
            
            // Create temporary canvas to sample pixel
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = image.width;
            tempCanvas.height = image.height;
            tempCtx.drawImage(image, 0, 0);
            
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

            // Draw pixel
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
    };
    
    image.onerror = () => {
      console.error("Failed to load image:", src);
    };
    
    image.src = src;
    imageRef.current = image;
  }, [src, width, height, cellSize, dotScale, shape, backgroundColor, dropoutStrength]);

  const handleMouseMove = (e) => {
    if (!interactive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
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
