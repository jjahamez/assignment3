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
    setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
  };

  export const CubicInput = ({a, b, c, d, setA, setB, setC, setD, history, setHistory}: InputProps) => {
    return (
      <div>
        <label>A: </label>
        <input type="number" step="any" value={a} onChange={(e) => setA(Number(e.target.value))} />

        <label>B: </label>
        <input type="number" step="any" value={b} onChange={(e) => setB(Number(e.target.value))} />

        <label>C: </label>
        <input type="number" step="any" value={c} onChange={(e) => setC(Number(e.target.value))} />

        <label>D: </label>
        <input type="number" step="any" value={d} onChange={(e) => setD(Number(e.target.value))} />

        <button onClick={() => setHistory([...history, { a, b, c, d }])}>Save</button>
      </div>
    );
  };