import React from "react";

interface RgbHeaderProps {
  rgb: string;
  message: string;
  headerColor: string;
}

const RgbHeader = React.memo(
  ({ rgb, message, headerColor }: RgbHeaderProps) => {
    const isGradient = headerColor === "gradient";
    return (
      <div
        className={`${
          isGradient ? "gradient-to-r-custom" : ""
        } w-full rounded-xl p-4 text-base text-center mb-2 border-2 border-crust drop-shadow-solid-crust transition-colors duration-300`}
        style={isGradient ? {} : { backgroundColor: headerColor }}
      >
        <h2 className="text-xl font-bold mb-1">Guess the Color!</h2>
        <div className="text-2xl font-mono font-bold tracking-wider mb-2">
          {rgb.toUpperCase()}
        </div>
        <div className="text-base font-pixel text-crust">{message}</div>
      </div>
    );
  }
);
RgbHeader.displayName = "RgbHeader";

export default RgbHeader;
