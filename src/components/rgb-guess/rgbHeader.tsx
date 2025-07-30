import React, { useCallback } from "react";

interface RgbHeaderProps {
  rgb: string;
  message: string;
  headerColor: string;
}

const textForDark = "text-text";
const textForLight = "text-base";

const RgbHeader = React.memo(
  ({ rgb, message, headerColor }: RgbHeaderProps) => {
    const isGradient = headerColor === "gradient";

    // Compare the headerColor string to see if it's brightness is greater than 128 using the formula:
    // brightness = 0.2126R+0.7152G+0.0722B
    // to determine if the text should be light or dark
    const calculateBrightness = useCallback((color: string) => {
      const [r, g, b] = color
        .slice(4, -1)
        .split(",")
        .map((c) => parseInt(c.trim(), 10));
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const textColorClass = brightness > 128 ? textForLight : textForDark;
      return textColorClass;
    }, []);

    const textColorClass = React.useMemo(
      () => (isGradient ? textForLight : calculateBrightness(headerColor)),
      [isGradient, headerColor, calculateBrightness]
    );

    return (
      <div
        className={`${
          isGradient ? "gradient-to-r-custom" : ""
        } w-full rounded-xl p-4 ${textColorClass} text-center mb-2 border-2 border-crust drop-shadow-solid-crust transition-colors duration-300`}
        style={isGradient ? {} : { backgroundColor: headerColor }}
      >
        <h2 className="text-xl font-bold mb-1 text-shadow-sm">
          Guess the Color!
        </h2>
        <div className="text-3xl text-shadow-md font-mono font-bold tracking-wider p-2 mb-2">
          {rgb.toUpperCase()}
        </div>
        <div className="text-shadow-sm font-pixel ">{message}</div>
      </div>
    );
  }
);
RgbHeader.displayName = "RgbHeader";

export default RgbHeader;
