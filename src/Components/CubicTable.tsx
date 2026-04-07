type TableProps = {
  p: number;
  q: number;
  discriminant: number;
  roots: number[];
  turningPoints: { x: number; y: number }[];
};

export const CubicTable = ({ p, q, discriminant, roots, turningPoints }: TableProps) => {
  return (
    <div className="flex flex-col items-center my-6 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-3 text-gray-700 text-center">Cubic Information</h2>
      <table className="border-collapse border border-gray-300 w-full max-w-md text-center">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-medium">P Value</td>
            <td className="border border-gray-300 px-4 py-2">{p.toFixed(5)}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">Q Value</td>
            <td className="border border-gray-300 px-4 py-2">{q.toFixed(5)}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-medium">Discriminant</td>
            <td className="border border-gray-300 px-4 py-2">{discriminant.toFixed(5)}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">Root 1</td>
            <td className="border border-gray-300 px-4 py-2">{roots[0] !== undefined ? `(${roots[0].toFixed(2)}, 0)` : "N/A"}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-medium">Root 2</td>
            <td className="border border-gray-300 px-4 py-2">{roots[1] !== undefined ? `(${roots[1].toFixed(2)}, 0)` : "Complex Root"}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">Root 3</td>
            <td className="border border-gray-300 px-4 py-2">{roots[2] !== undefined ? `(${roots[2].toFixed(2)}, 0)` : "Complex Root"}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-medium">Turning Point 1</td>
            <td className="border border-gray-300 px-4 py-2">{turningPoints[0] ? `(${turningPoints[0].x.toFixed(2)}, ${turningPoints[0].y.toFixed(2)})` : "None"}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">Turning Point 2</td>
            <td className="border border-gray-300 px-4 py-2">{turningPoints[1] ? `(${turningPoints[1].x.toFixed(2)}, ${turningPoints[1].y.toFixed(2)})` : "None"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};