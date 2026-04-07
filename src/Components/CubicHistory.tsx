  import type { HistoryItem } from "../utils/types";

  type HistoryProps = {
    history: HistoryItem[];
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
  };

  export const CubicHistory = ({history,setA,setB,setC,setD}: HistoryProps) => {
    return (
      <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Saved History</h2>

      <table className="border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">A</th>
            <th className="border border-gray-300 px-4 py-2">B</th>
            <th className="border border-gray-300 px-4 py-2">C</th>
            <th className="border border-gray-300 px-4 py-2">D</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} onClick={() => { setA(item.a); setB(item.b); setC(item.c); setD(item.d); }} className="cursor-pointer hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">{item.a}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.b}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.c}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  };