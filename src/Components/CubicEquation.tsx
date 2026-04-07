type CubicEquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
  const equation =
    `${a === 1 ? "" : a === -1 ? "-" : a}x³ ` +
    `${b !== 0 ? `${b > 0 ? "+" : "-"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}x² ` : ""}` +
    `${c !== 0 ? `${c > 0 ? "+" : "-"} ${Math.abs(c) === 1 ? "" : Math.abs(c)}x ` : ""}` +
    `${d !== 0 ? `${d > 0 ? "+" : "-"} ${Math.abs(d)}` : ""}`;

  return (
    <div>
      <h2>Equation</h2>
      <p>{equation}</p>
    </div>
  );
};