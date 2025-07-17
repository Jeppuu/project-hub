import {
  BUTTONS,
  CalculatorButtonConfig,
} from "@/utils/calculator/calculatorButtonsConfig";
import CalculatorButton from "./calculatorButton";

type CalculatorButtonsProps = {
  onButtonClick: (btn: CalculatorButtonConfig) => void;
};

const CalculatorButtons = ({ onButtonClick }: CalculatorButtonsProps) => (
  <div className="grid grid-cols-4 grid-rows-5 gap-4">
    {BUTTONS.map((btn) => (
      <CalculatorButton
        key={btn.id}
        button={btn}
        onClick={() => onButtonClick(btn)}
      />
    ))}
  </div>
);

export default CalculatorButtons;
