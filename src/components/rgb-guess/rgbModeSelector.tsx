import React from "react";
import { Button } from "@/components/ui/button";
import { RgbGameMode } from "./rbgGuessGame";

interface RgbModeSelectorProps {
  mode: RgbGameMode;
  setMode: (m: RgbGameMode) => void;
  expertUnlocked?: boolean;
}

const RgbModeSelector = React.memo(
  ({ mode, setMode, expertUnlocked }: RgbModeSelectorProps) => {
    const MODES: RgbGameMode[] = expertUnlocked
      ? ["easy", "hard", "expert"]
      : ["easy", "hard"];

    return (
      <div className="flex gap-2">
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
    );
  }
);

RgbModeSelector.displayName = "RgbModeSelector";

export default RgbModeSelector;
