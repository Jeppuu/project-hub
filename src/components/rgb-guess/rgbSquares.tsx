import React from "react";
import { IncorrectColor } from "./rbgGuessGame";

interface RgbSquaresProps {
  colors: string[];
  onSquareClick: (color: string, idx: number) => void;
  disabled: boolean;
}

const RgbSquares = React.memo(
  ({ colors, onSquareClick, disabled }: RgbSquaresProps) => (
    <div className="grid grid-cols-3 gap-4 w-full">
      {colors.map((color, idx) => (
        <button
          key={idx}
          className="aspect-square w-full rounded-lg border-2 border-crust drop-shadow-solid-crust transition-all duration-300"
          style={{
            background: color,
            cursor: disabled ? "default" : "pointer",
          }}
          onClick={() => onSquareClick(color, idx)}
          disabled={disabled || color === IncorrectColor}
          aria-label={`Color square ${idx + 1}`}
        />
      ))}
    </div>
  )
);

RgbSquares.displayName = "RgbSquares";

export default RgbSquares;
