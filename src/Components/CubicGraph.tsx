// src/components/CubicGraph.tsx
import React, { useRef, useEffect } from "react";
import type { CubicCoefficients } from "../utils/types";
import { solveCubic } from "../utils/cubicSolver";

interface CubicGraphProps {
  coefficients: CubicCoefficients;
}

export function CubicGraph({ coefficients }: CubicGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const scale = 20; // pixels per unit
    const centerX = width / 2;
    const centerY = height / 2;

    const { a, b, c, d } = coefficients;
    const { roots } = solveCubic(coefficients);

    // Clear canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;
    for (let x = centerX % scale; x < width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = centerY % scale; y < height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw cubic curve
    if (a !== 0 || b !== 0 || c !== 0 || d !== 0) {
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let px = 0; px < width; px++) {
        const x = (px - centerX) / scale;
        const y = a * x ** 3 + b * x ** 2 + c * x + d;
        const py = centerY - y * scale;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Draw roots
    ctx.fillStyle = "blue";
    roots.forEach((root) => {
      const px = centerX + root * scale;
      const py = centerY;
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [coefficients]);

  return (
    <div>
      <h2>Cubic Graph</h2>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
}