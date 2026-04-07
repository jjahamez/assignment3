import './app.css';
import { useState } from "react";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";
import { CubicSolver } from "./utils/cubicSolver";
import { LocalMinMax } from "./utils/localMinMax";
import type { HistoryItem, TurningPoint } from "./utils/types";

export const App = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(1);
  const [c, setC] = useState<number>(1);
  const [d, setD] = useState<number>(1);

  const [history, setHistory] = useState<HistoryItem[]>([]);

  const p: number = (3 * a * c - b * b) / (3 * a * a);

  const q: number = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3); // Math.pow(q / 2, 2) + Math.pow(p / 3, 3); breaks in certain cases (1,-1,0,0) 

  const roots: number[] = CubicSolver(a, b, p, q, discriminant);
  const turningPoints: TurningPoint[] = LocalMinMax(a, b, c, d);

  return (
    <div>
      <h1>Cubic Equation Calculator</h1>
      <p>Enter values for: ax³ + bx² + cx + d</p>

      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
        setHistory={setHistory}
        history={history}
      />

      <CubicEquation
        a={a}
        b={b}
        c={c}
        d={d}
      />
      {a === 0 && (
        <p className="text-2xl font-bold text-red-600 my-4 text-center"> *NOT a Cubic Function* </p>
      )}      
      
      <div className="flex justify-center items-start gap-6 mt-5">
        <div className="w-1/2">
          <CubicTable
            p={p}
            q={q}
            discriminant={discriminant}
            roots={roots}
            turningPoints={turningPoints}
          />
        </div>

        <div className="w-1/2">
          <CubicGraph
            a={a}
            b={b}
            c={c}
            d={d}
            roots={roots}
          />
        </div>
      </div>
      
      <CubicHistory
        history={history}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
      />
    </div>
  );
};