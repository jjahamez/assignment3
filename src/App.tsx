// src/App.tsx
import React, { useState } from "react";
import type { CubicCoefficients, CubicResults } from "./utils/types";
import { solveCubic } from "./utils/cubicSolver";
import { computeExtrema } from "./utils/localMinMax";

import { CubicInput } from "./components/CubicInput";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";

export default function App() {
  // Current coefficients of the cubic equation
  const [coefficients, setCoefficients] = useState<CubicCoefficients>({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  });

  // History of saved cubic equations
  const [history, setHistory] = useState<CubicCoefficients[]>([]);

  // Compute results dynamically whenever coefficients change
  const cubicResults: CubicResults = {
    ...solveCubic(coefficients),
    extrema: computeExtrema(coefficients),
  };

  return (
    <div>
      <h1>Cubic Equation Solver</h1>

      {/* Input component */}
      <CubicInput
        setCoefficients={setCoefficients}
        setHistory={setHistory}
        history={history}
      />

      {/* Table showing current cubic results */}
      <CubicTable results={cubicResults} />

      {/* Graph of the current cubic */}
      <CubicGraph coefficients={coefficients} />

      {/* History of previous cubic inputs */}
      <CubicHistory history={history} setCoefficients={setCoefficients} />
    </div>
  );
}