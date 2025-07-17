"use client";
import { useState } from "react";
import CalculatorDisplay from "./calculatorDisplay";
import CalculatorButtons from "./calculatorButtons";
import { CalculatorButtonConfig } from "@/utils/calculator/calculatorButtonsConfig";

const isOperator = /[x/+‑]/;
const endsWithOperator = /[x+‑/]$/;
const endsWithNegativeSign = /\d[x/+‑]{1}‑$/;

const CalculatorApp = () => {
  const [currentVal, setCurrentVal] = useState("0");
  const [prevVal, setPrevVal] = useState("0");
  const [formula, setFormula] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  // Limit warning
  const limitWarning = () => {
    setCurrentVal("Digit Limit Met");
    setTimeout(() => setCurrentVal(prevVal), 1000);
  };

  // Handle numbers
  const handleNumber = (value: string) => {
    if (currentVal.length > 21) return limitWarning();
    if (evaluated) {
      setCurrentVal(value);
      setFormula(value !== "0" ? value : "");
      setEvaluated(false);
    } else {
      setCurrentVal(
        currentVal === "0" || isOperator.test(currentVal)
          ? value
          : currentVal + value
      );
      setFormula((prev) => {
        if (currentVal === "0" && value === "0") {
          return prev === "" ? value : prev;
        }
        if (/([^.0-9]0|^0)$/.test(prev)) {
          return prev.slice(0, -1) + value;
        }
        return prev + value;
      });
    }
  };

  // Handle operators
  const handleOperator = (value: string) => {
    setEvaluated(false);
    setCurrentVal(value);
    if (evaluated) {
      setFormula(prevVal + value);
    } else if (!endsWithOperator.test(formula)) {
      setPrevVal(formula);
      setFormula(formula + value);
    } else if (!endsWithNegativeSign.test(formula)) {
      setFormula(
        (endsWithNegativeSign.test(formula + value) ? formula : prevVal) + value
      );
    } else if (value !== "‑") {
      setFormula(prevVal + value);
    }
  };

  // Handle decimal
  const handleDecimal = () => {
    if (evaluated) {
      setCurrentVal("0.");
      setFormula("0.");
      setEvaluated(false);
    } else if (!currentVal.includes(".") && !currentVal.includes("Limit")) {
      if (currentVal.length > 21) return limitWarning();
      setCurrentVal((prev) => prev + ".");
      setFormula((prev) => {
        if (
          endsWithOperator.test(prev) ||
          (currentVal === "0" && prev === "")
        ) {
          return prev + "0.";
        }
        return prev + ".";
      });
    }
  };

  // Handle evaluate
  const handleEvaluate = () => {
    if (currentVal.includes("Limit")) return;
    let expression = formula;
    while (endsWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }
    expression = expression.replace(/x/g, "*").replace(/‑/g, "-");
    const answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
    setCurrentVal(answer.toString());
    setFormula(
      expression
        .replace(/\*/g, "⋅")
        .replace(/-/g, "‑")
        .replace(/(x|\/|\+)‑/, "$1-")
        .replace(/^‑/, "-") +
        "=" +
        answer
    );
    setPrevVal(answer.toString());
    setEvaluated(true);
  };

  // Handle clear
  const handleClear = () => {
    setCurrentVal("0");
    setPrevVal("0");
    setFormula("");
    setEvaluated(false);
  };

  // Button click handler
  const handleButtonClick = (btn: CalculatorButtonConfig) => {
    if (btn.type === "number") handleNumber(btn.label);
    else if (btn.type === "operator") handleOperator(btn.label);
    else if (btn.type === "decimal") handleDecimal();
    else if (btn.type === "equals") handleEvaluate();
    else if (btn.type === "action") handleClear();
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-surface-0 border-1 border-crust rounded-xl p-4 drop-shadow-solid-crust flex flex-col gap-4">
      <CalculatorDisplay
        formula={formula.replace(/x/g, "⋅")}
        value={currentVal}
      />
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
};

export default CalculatorApp;
