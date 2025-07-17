export type CalculatorButtonConfig = {
  id: string;
  label: string;
  type: "number" | "operator" | "decimal" | "equals" | "action";
  className?: string;
};

export const BUTTONS: CalculatorButtonConfig[] = [
  { id: "clear", label: "AC", type: "action", className: "col-span-2" },
  { id: "divide", label: "/", type: "operator" },
  { id: "multiply", label: "x", type: "operator" },
  { id: "seven", label: "7", type: "number" },
  { id: "eight", label: "8", type: "number" },
  { id: "nine", label: "9", type: "number" },
  { id: "subtract", label: "‑", type: "operator" },
  { id: "four", label: "4", type: "number" },
  { id: "five", label: "5", type: "number" },
  { id: "six", label: "6", type: "number" },
  { id: "add", label: "+", type: "operator" },
  { id: "one", label: "1", type: "number" },
  { id: "two", label: "2", type: "number" },
  { id: "three", label: "3", type: "number" },
  { id: "equals", label: "=", type: "equals", className: "row-span-2" },
  { id: "zero", label: "0", type: "number", className: "col-span-2" },
  { id: "decimal", label: ".", type: "decimal" },
];
