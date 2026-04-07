type TableProps = {
  p: number;
  q: number;
  discriminant: number;
  roots: number[];
  turningPoints: { x: number; y: number }[];
};

export const CubicTable = ({p, q, discriminant, roots, turningPoints}: TableProps) => {
  return (
    <div>
      <h2>Cubic Information</h2>

      <table border={1}>
        <tbody>
          <tr>
            <td>P Value</td>  
            <td>{p.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Q Value</td>
            <td>{q.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Discriminant</td>
            <td>{discriminant.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Root 1</td>
            <td>{roots[0] !== undefined ? `(${roots[0].toFixed(2)}, 0)` : "N/A"}</td>
          </tr>
          <tr>
            <td>Root 2</td>
            <td>{roots[1] !== undefined ? `(${roots[1].toFixed(2)}, 0)` : "Complex Root"}</td>
          </tr>
          <tr>
            <td>Root 3</td>
            <td>{roots[2] !== undefined ? `(${roots[2].toFixed(2)}, 0)` : "Complex Root"}</td>
          </tr>
          <tr>
            <td>Turning Point 1</td>
            <td>
              {turningPoints[0]
                ? `(${turningPoints[0].x.toFixed(2)}, ${turningPoints[0].y.toFixed(2)})`
                : "None"}
            </td>
          </tr>
          <tr>
            <td>Turning Point 2</td>
            <td>
              {turningPoints[1]
                ? `(${turningPoints[1].x.toFixed(2)}, ${turningPoints[1].y.toFixed(2)})`
                : "None"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};