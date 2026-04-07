import type { HistoryItem } from "../utils/types";

type InputProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  setA: (value: number) => void;
  setB: (value: number) => void;
  setC: (value: number) => void;
  setD: (value: number) => void;
  history: HistoryItem[];
  setHistory: (history: HistoryItem[]) => void;
};

export const CubicInput = ({ a, b, c, d, setA, setB, setC, setD, history, setHistory }: InputProps) => {
  return (
    <div className="flex flex-col items-center my-4 p-4 border rounded-lg shadow-sm bg-gray-50 w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-3 text-gray-700 text-center">Enter Coefficients</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center mb-3">
        <div className="flex flex-col items-center">
          <label className="mb-1 font-medium text-gray-600">A:</label>
          <input type="number" step="any" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-20 px-2 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-1 font-medium text-gray-600">B:</label>
          <input type="number" step="any" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-20 px-2 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-1 font-medium text-gray-600">C:</label>
          <input type="number" step="any" value={c} onChange={(e) => setC(Number(e.target.value))} className="w-20 px-2 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-1 font-medium text-gray-600">D:</label>
          <input type="number" step="any" value={d} onChange={(e) => setD(Number(e.target.value))} className="w-20 px-2 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
      </div>
      <button onClick={() => setHistory([...history, { a, b, c, d }])} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200">Save</button>
    </div>
  );
};