import type { TurningPoint } from "./types";

export const LocalMinMax = (a: number, b: number, c: number, d: number): TurningPoint[] => {
  const points: TurningPoint[] = [];

  if (a === 0) {
    return points;
  }

  const discriminant: number = 4 * b * b - 12 * a * c;

  if (discriminant < 0) {
    return points; // no turning points 
  }

  const x1: number = (-2 * b + Math.sqrt(discriminant)) / (6 * a); 
  const x2: number = (-2 * b - Math.sqrt(discriminant)) / (6 * a); // derivative 

  const y1: number = a * x1 ** 3 + b * x1 ** 2 + c * x1 + d;
  const y2: number = a * x2 ** 3 + b * x2 ** 2 + c * x2 + d; 

  points.push(
    { x: x1, y: y1 },
    { x: x2, y: y2 }
  );

  return points;
};