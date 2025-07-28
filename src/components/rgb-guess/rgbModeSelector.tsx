import React from "react";
import { Button } from "@/components/ui/button";
import { RgbGameMode } from "./rbgGuessGame";

interface RgbModeSelectorProps {
  mode: RgbGameMode;
  setMode: (m: RgbGameMode) => void;
}

const MODES: RgbGameMode[] = ["easy", "hard"];

const RgbModeSelector = React.memo(
  ({ mode, setMode }: RgbModeSelectorProps) => (
    <div className="flex gap-2 mb-2">
      {MODES.map((m) => (
        <Button
          key={m}
          className={`font-pixel border-2 border-crust drop-shadow-solid-crust ${
            mode === m ? "bg-blue text-crust" : ""
          }`}
          variant={mode === m ? "default" : "secondary"}
          size="lg"
          onClick={() => setMode(m)}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </Button>
      ))}
    </div>
  )
);

RgbModeSelector.displayName = "RgbModeSelector";

export default RgbModeSelector;
