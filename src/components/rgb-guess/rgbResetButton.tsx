import React from "react";
import { Button } from "@/components/ui/button";

interface RgbResetButtonProps {
  onClick: () => void;
  gameOver: boolean;
}

const RgbResetButton = React.memo(
  ({ onClick, gameOver }: RgbResetButtonProps) => (
    <Button
      className="font-pixel border-2 border-crust drop-shadow-solid-crust"
      variant={"secondary"}
      size={"lg"}
      onClick={onClick}
    >
      {gameOver ? "Play Again?" : "New Colors"}
    </Button>
  )
);

RgbResetButton.displayName = "RgbResetButton";

export default RgbResetButton;
