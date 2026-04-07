import type { HistoryItem } from "../utils/types";

type CubicHistoryProps = {
  history: HistoryItem[];
  setA: React.Dispatch<React.SetStateAction<number>>;
  setB: React.Dispatch<React.SetStateAction<number>>;
  setC: React.Dispatch<React.SetStateAction<number>>;
  setD: React.Dispatch<React.SetStateAction<number>>;
};

export const CubicHistory = ({
  history,
  setA,
  setB,
  setC,
  setD
}: CubicHistoryProps) => {
  return (
    <div>
      <h2>Saved History</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                setA(item.a);
                setB(item.b);
                setC(item.c);
                setD(item.d);
              }}
              style={{ cursor: "pointer" }}
            >
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.c}</td>
              <td>{item.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};