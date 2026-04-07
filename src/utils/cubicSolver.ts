import type { CubicCoefficients, CubicResults } from "./types";

// Solve cubic equation using Cardano's method
export function solveCubic({
  a,
  b,
  c,
  d,
}: CubicCoefficients): CubicResults {
  if (a === 0) {
    return {
      p: 0,
      q: 0,
      discriminant: 0,
      roots: [],
      extrema: { max: undefined, min: undefined },
    };
  }

  const p = (3 * a * c - b * b) / (3 * a * a);
  const q =
    (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);

  const discriminant: number = Number(((q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3)).toFixed(6));

  const h = -b / (3 * a);

  const roots: number[] = [];

  if (discriminant < 0) {
    const theta = Math.acos(-q / (2 * Math.sqrt((-p / 3) ** 3))) / 3;
    const k = 2 * Math.sqrt(-p / 3);

    const root1 = k * Math.cos(theta) + h;
    const root2 = k * Math.cos(theta + (2 * Math.PI) / 3) + h;
    const root3 = k * Math.cos(theta + (4 * Math.PI) / 3) + h;

    roots.push(root1, root2, root3);
  } else if (discriminant > 0) {
    const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
    const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
    const root1 = u + v + h;

    roots.push(root1);
  } else if (discriminant === 0 && p === 0 && q === 0) {
    roots.push(h, h, h);
  } else {
    const r = Math.cbrt(q / 2);
    const root1 = r + h;
    const root2 = -2 * r + h;

    roots.push(root1, root1, root2);
  }

  return {
    p,
    q,
    discriminant,
    roots,
    extrema: { max: undefined, min: undefined }, // calculated separately
  };
}