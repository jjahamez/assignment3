// src/components/CubicInput.tsx
import React, { useRef } from "react";
import type { CubicCoefficients } from "../utils/types";

interface CubicInputProps {
  setCoefficients: (coeffs: CubicCoefficients) => void;
  setHistory: (history: CubicCoefficients[]) => void;
  history: CubicCoefficients[];
}

export function CubicInput({ setCoefficients, setHistory, history }: CubicInputProps) {
  const aRef = useRef<HTMLInputElement | null>(null);
  const bRef = useRef<HTMLInputElement | null>(null);
  const cRef = useRef<HTMLInputElement | null>(null);
  const dRef = useRef<HTMLInputElement | null>(null);

  function handleSave() {
    if (!aRef.current || !bRef.current || !cRef.current || !dRef.current) return;

    const nextCoeffs: CubicCoefficients = {
      a: Number(aRef.current.value),
      b: Number(bRef.current.value),
      c: Number(cRef.current.value),
      d: Number(dRef.current.value),
    };

    setCoefficients(nextCoeffs);            // update main cubic
    setHistory([...history, nextCoeffs]);   // add to history
  }

  return (
    <div>
      <h2>Cubic Input</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <label htmlFor="a">a:</label>
        <input
          type="number"
          id="a"
          ref={aRef}
          defaultValue={0}
          onChange={(e) =>
            setCoefficients({
              a: Number(e.currentTarget.value),
              b: bRef.current ? Number(bRef.current.value) : 0,
              c: cRef.current ? Number(cRef.current.value) : 0,
              d: dRef.current ? Number(dRef.current.value) : 0,
            })
          }
        />

        <label htmlFor="b">b:</label>
        <input
          type="number"
          id="b"
          ref={bRef}
          defaultValue={0}
          onChange={(e) =>
            setCoefficients({
              a: aRef.current ? Number(aRef.current.value) : 0,
              b: Number(e.currentTarget.value),
              c: cRef.current ? Number(cRef.current.value) : 0,
              d: dRef.current ? Number(dRef.current.value) : 0,
            })
          }
        />

        <label htmlFor="c">c:</label>
        <input
          type="number"
          id="c"
          ref={cRef}
          defaultValue={0}
          onChange={(e) =>
            setCoefficients({
              a: aRef.current ? Number(aRef.current.value) : 0,
              b: bRef.current ? Number(bRef.current.value) : 0,
              c: Number(e.currentTarget.value),
              d: dRef.current ? Number(dRef.current.value) : 0,
            })
          }
        />

        <label htmlFor="d">d:</label>
        <input
          type="number"
          id="d"
          ref={dRef}
          defaultValue={0}
          onChange={(e) =>
            setCoefficients({
              a: aRef.current ? Number(aRef.current.value) : 0,
              b: bRef.current ? Number(bRef.current.value) : 0,
              c: cRef.current ? Number(cRef.current.value) : 0,
              d: Number(e.currentTarget.value),
            })
          }
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}