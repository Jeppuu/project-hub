import React from "react";

interface ProgressLoaderProps {
  value: number; // current value (e.g. seconds elapsed)
  max: number; // maximum value (e.g. max seconds for full bar)
  colorClass?: string; // optional Tailwind class for bar color
}

const ProgressLoader = React.memo(
  ({
    value,
    max,
    colorClass = "gradient-to-r-custom",
  }: ProgressLoaderProps) => (
    <div className="w-full h-2 bg-overlay-1 rounded mb-2 overflow-hidden">
      <div
        className={`h-full transition-all duration-200 ${colorClass}`}
        style={{
          width: `${Math.min((value / max) * 100, 100)}%`,
        }}
      />
    </div>
  )
);

ProgressLoader.displayName = "ProgressLoader";
export default ProgressLoader;
