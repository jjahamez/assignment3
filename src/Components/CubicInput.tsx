type CubicInputProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  setA: React.Dispatch<React.SetStateAction<number>>;
  setB: React.Dispatch<React.SetStateAction<number>>;
  setC: React.Dispatch<React.SetStateAction<number>>;
  setD: React.Dispatch<React.SetStateAction<number>>;
  onSave: () => void;
};

export const CubicInput = ({
  a,
  b,
  c,
  d,
  setA,
  setB,
  setC,
  setD,
  onSave
}: CubicInputProps) => {
  return (
    <div>
      <label>A: </label>
      <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />

      <label>B: </label>
      <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />

      <label>C: </label>
      <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />

      <label>D: </label>
      <input type="number" value={d} onChange={(e) => setD(Number(e.target.value))} />

      <button onClick={onSave}>Save</button>
    </div>
  );
};