"use client";
import React, { useEffect, useRef } from "react";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
  particleSpeed = 1,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const rect = canvas.getBoundingClientRect();
      const particleCount = Math.floor((rect.width * rect.height) / particleDensity);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * particleSpeed,
          speedY: (Math.random() - 0.5) * particleSpeed,
          opacity: Math.random() * 0.5 + 0.5,
          life: Math.random() * 100,
          maxLife: Math.random() * 100 + 50,
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const rect = canvas.getBoundingClientRect();
      
      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;

        // Reset particle if it goes off screen or dies
        if (
          particle.x < 0 ||
          particle.x > rect.width ||
          particle.y < 0 ||
          particle.y > rect.height ||
          particle.life > particle.maxLife
        ) {
          particle.x = Math.random() * rect.width;
          particle.y = Math.random() * rect.height;
          particle.life = 0;
          particle.maxLife = Math.random() * 100 + 50;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [minSize, maxSize, particleDensity, particleColor, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background }}
    />
  );
};