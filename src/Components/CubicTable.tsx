// src/components/CubicTable.tsx
import type { CubicResults } from "../utils/types";

interface CubicTableProps {
  results: CubicResults;
}

export function CubicTable({ results }: CubicTableProps) {
  const { p, q, discriminant, roots, extrema } = results;

  return (
    <div>
      <h2>Cubic Results</h2>
      <table>
        <tbody>
          <tr>
            <td>P:</td>
            <td>{p.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Q:</td>
            <td>{q.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Discriminant:</td>
            <td>{discriminant.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Root 1:</td>
            <td>{roots[0] !== undefined ? roots[0].toFixed(2) : "-"}</td>
          </tr>
          <tr>
            <td>Root 2:</td>
            <td>{roots[1] !== undefined ? roots[1].toFixed(2) : "-"}</td>
          </tr>
          <tr>
            <td>Root 3:</td>
            <td>{roots[2] !== undefined ? roots[2].toFixed(2) : "-"}</td>
          </tr>
          <tr>
            <td>Maximum:</td>
            <td>
              {extrema.max
                ? `(${extrema.max.x.toFixed(2)}, ${extrema.max.y.toFixed(2)})`
                : "-"}
            </td>
          </tr>
          <tr>
            <td>Minimum:</td>
            <td>
              {extrema.min
                ? `(${extrema.min.x.toFixed(2)}, ${extrema.min.y.toFixed(2)})`
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}