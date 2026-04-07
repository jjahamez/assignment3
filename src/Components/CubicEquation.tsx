type EquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export const CubicEquation = ({ a, b, c, d }: EquationProps) => {
  const equation =
    `${a === 1 ? "" : a === -1 ? "-" : a}x³ ` +
    `${b !== 0 ? `${b > 0 ? "+" : "-"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}x² ` : ""}` +
    `${c !== 0 ? `${c > 0 ? "+" : "-"} ${Math.abs(c) === 1 ? "" : Math.abs(c)}x ` : ""}` +
    `${d !== 0 ? `${d > 0 ? "+" : "-"} ${Math.abs(d)}` : ""}`;

  return (
    <div className="text-center my-6 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h2 className="text-2xl font-bold mb-2 text-gray-700">Cubic Equation:</h2>
      <p className="text-lg text-gray-900">{equation}</p>
    </div>
  );
};