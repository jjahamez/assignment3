export const CubicSolver = (
  a: number,
  b: number,
  p: number,
  q: number,
  discriminant: number
): number[] => {
  const roots: number[] = [];

  if (a === 0) {
    return roots;
  }

  const h: number = -b / (3 * a);

  if (discriminant < 0) {
    const theta: number = Math.acos((-q / (2 * Math.sqrt((-p / 3) ** 3)))) / 3;
    const k: number = 2 * Math.sqrt(-p / 3);

    const root1: number = k * Math.cos(theta) + h;
    const root2: number = k * Math.cos(theta + 2 * Math.PI / 3) + h;
    const root3: number = k * Math.cos(theta + 4 * Math.PI / 3) + h;

    roots.push(root1, root2, root3);
  } else if (discriminant > 0) {
    const u: number = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
    const v: number = Math.cbrt(-q / 2 - Math.sqrt(discriminant));

    const root1: number = u + v + h;

    roots.push(root1);
  } else if (discriminant === 0 && p === 0 && q === 0) {
    const root1: number = h;

    roots.push(root1, root1, root1);
  } else {
    const r: number = Math.cbrt(q / 2);

    const root1: number = r + h;
    const root2: number = -2 * r + h;

    roots.push(root1, root1, root2);
  }

  return roots;
};