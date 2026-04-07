import { useEffect, useRef } from "react";

type CubicGraphProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  roots: number[];
};

export const CubicGraph = ({ a, b, c, d, roots }: CubicGraphProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width: number = canvas.width;
    const height: number = canvas.height;
    const scale: number = 21;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    const centerX: number = width / 2;
    const centerY: number = height / 2;

    ctx.strokeStyle = "DarkGrey";
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

    ctx.strokeStyle = "Black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    ctx.strokeStyle = "Red";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let px = 0; px < width; px++) {
      const x: number = (px - centerX) / scale;
      const y: number = a * x ** 3 + b * x ** 2 + c * x + d;
      const py: number = centerY - y * scale;

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }

    ctx.stroke();

    ctx.fillStyle = "Blue";
    roots.forEach((root) => {
      const px: number = centerX + root * scale;
      const py: number = centerY;

      ctx.beginPath();
      ctx.arc(px, py, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [a, b, c, d, roots]);

  return (
    <div>
      <h2>Graph</h2>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
};