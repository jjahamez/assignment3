// src/utils/localMaxMin.ts
import type { CubicCoefficients } from "./types";

// Calculate local maxima and minima (derivative = 3ax^2 + 2bx + c = 0)
export function computeExtrema({ a, b, c }: CubicCoefficients) {
  const extrema: { max?: { x: number; y: number }; min?: { x: number; y: number } } = {};

  if (a === 0) return extrema; // Linear function, no local max/min

  const discriminant = 4 * b * b - 12 * a * 0; // derivative quadratic = 3ax^2 + 2bx + c, set to zero
  const derivativeDiscriminant = b * b - 3 * a * c;

  if (derivativeDiscriminant < 0) return extrema; // no real extrema

  const sqrtDisc = Math.sqrt(derivativeDiscriminant);
  const x1 = (-b + sqrtDisc) / (3 * a);
  const x2 = (-b - sqrtDisc) / (3 * a);

  extrema.max = { x: Math.max(x1, x2), y: a * Math.max(x1, x2) ** 3 + b * Math.max(x1, x2) ** 2 + c * 0 };
  extrema.min = { x: Math.min(x1, x2), y: a * Math.min(x1, x2) ** 3 + b * Math.min(x1, x2) ** 2 + c * 0 };

  return extrema;
}