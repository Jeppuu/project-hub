const CalculatorDisplay = ({
  formula,
  value,
}: {
  formula: string;
  value: string;
}) => {
  return (
    <div className="mb-2">
      <div
        className="text-3xl font-vt323 text-right text-text bg-base px-2 py-3 rounded-lg border-2 border-pink drop-shadow-solid-crust"
        id="display"
      >
        <div className="text-sm text-subtext-1 min-h-[1.5em] text-right break-all">
          {formula}
        </div>
        {value}
      </div>
    </div>
  );
};
export default CalculatorDisplay;
