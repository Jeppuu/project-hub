import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Flame, Timer } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  timer: number;
  streak: number;
  bestScore: number;
  bestStreak: number;
}

const ScoreDisplay = React.memo(
  ({ score, timer, streak, bestScore, bestStreak }: ScoreDisplayProps) => (
    <Card className="w-full bg-surface-1 border-lavender shadow-md mb-2">
      <CardContent className="flex flex-col gap-1 px-4 py-2">
        <div className="flex flex-row justify-between items-center text-lg font-vt323 text-lavender box-shadow-md">
          <span className="flex items-center gap-1">
            <Trophy className="w-5 h-5 text-yellow" /> Score:
            <span className="ml-1 text-yellow font-bold text-xl">{score}</span>
          </span>
          <span className="flex items-center gap-1">
            <Timer className="w-5 h-5 text-blue" />
            <span className="ml-1 text-blue font-bold text-xl">
              {timer.toFixed(1)}s
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-5 h-5 text-red" /> Streak:
            <span className="ml-1 text-red font-bold text-xl">{streak}</span>
          </span>
        </div>
        <div className="flex flex-row justify-between items-center text-base font-vt323 text-mauve mt-1">
          <span>
            <Trophy className="inline w-4 h-4 mr-1 text-yellow" />
            Best Score:{" "}
            <span className="font-bold text-yellow">{bestScore}</span>
          </span>
          <span>
            <Flame className="inline w-4 h-4 mr-1 text-red" />
            Best Streak:{" "}
            <span className="font-bold text-red">{bestStreak}</span>
          </span>
        </div>
      </CardContent>
    </Card>
  )
);

ScoreDisplay.displayName = "ScoreDisplay";
export default ScoreDisplay;
