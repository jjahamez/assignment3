// src/components/CubicHistory.tsx
import type { CubicCoefficients } from "../utils/types";

interface CubicHistoryProps {
  history: CubicCoefficients[];
  setCoefficients: (coeffs: CubicCoefficients) => void;
}

export function CubicHistory({ history, setCoefficients }: CubicHistoryProps) {
  return (
    <div>
      <h2>Saved Cubic History</h2>
      {history.length === 0 ? (
        <p>No saved cubics yet.</p>
      ) : (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>#</th>
              <th>a</th>
              <th>b</th>
              <th>c</th>
              <th>d</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr
                key={index}
                onClick={() =>
                  setCoefficients({ a: item.a, b: item.b, c: item.c, d: item.d })
                }
                style={{ cursor: "pointer" }}
              >
                <td>{index + 1}</td>
                <td>{item.a}</td>
                <td>{item.b}</td>
                <td>{item.c}</td>
                <td>{item.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}