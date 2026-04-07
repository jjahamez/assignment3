// src/components/CubicTable.tsx
import type { CubicCoefficients } from "../utils/types";
import { solveCubic } from "../utils/cubicSolver";
import { computeExtrema } from "../utils/localMinMax";

interface CubicTableProps {
  coefficients: CubicCoefficients;
}

export function CubicTable({ coefficients }: CubicTableProps) {
  const results = solveCubic(coefficients);
  const extrema = computeExtrema(coefficients);

  return (
    <div>
      <h2>Cubic Results</h2>
      <table border={1} cellPadding={5}>
        <tbody>
          <tr>
            <td>P Value</td>
            <td>{results.p.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Q Value</td>
            <td>{results.q.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Discriminant</td>
            <td>{results.discriminant.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Root 1</td>
            <td>{results.roots[0]?.toFixed(2) ?? "N/A"}</td>
          </tr>
          <tr>
            <td>Root 2</td>
            <td>{results.roots[1]?.toFixed(2) ?? "N/A"}</td>
          </tr>
          <tr>
            <td>Root 3</td>
            <td>{results.roots[2]?.toFixed(2) ?? "N/A"}</td>
          </tr>
          <tr>
            <td>Local Max</td>
            <td>
              {extrema.max
                ? `(${extrema.max.x.toFixed(2)}, ${extrema.max.y.toFixed(2)})`
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>Local Min</td>
            <td>
              {extrema.min
                ? `(${extrema.min.x.toFixed(2)}, ${extrema.min.y.toFixed(2)})`
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}