export interface CubicCoefficients {
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface CubicResults {
  p: number;
  q: number;
  discriminant: number;
  roots: number[];
  extrema: {
    max?: { x: number; y: number };
    min?: { x: number; y: number };
  };
}