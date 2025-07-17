import { CalculatorButtonConfig } from "@/utils/calculator/calculatorButtonsConfig";

type CalculatorButtonProps = {
  button: CalculatorButtonConfig;
  onClick: () => void;
};

const CalculatorButton = ({ button, onClick }: CalculatorButtonProps) => (
  <button
    id={button.id}
    className={`py-3 rounded-lg font-vt323 text-xl border-2 border-crust drop-shadow-solid-crust transition active:scale-95
      ${button.type === "operator" ? "bg-lavender text-base" : ""}
      ${button.type === "number" ? "bg-surface-1 text-text" : ""}
      ${button.type === "decimal" ? "bg-surface-1 text-text" : ""}
      ${button.type === "equals" ? "gradient-to-r-custom text-base" : ""}
      ${button.type === "action" ? "gradient-to-r-custom text-base" : ""}
      ${button.className || ""}
    `}
    onClick={onClick}
  >
    {button.label}
  </button>
);

export default CalculatorButton;
