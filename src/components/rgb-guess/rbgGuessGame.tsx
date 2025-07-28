"use client";
import React, { useState, useEffect, useCallback } from "react";
import RgbHeader from "./rgbHeader";
import RgbModeSelector from "./rgbModeSelector";
import RgbSquares from "./rgbSquares";
import RgbResetButton from "./rgbResetButton";
import ProgressLoader from "./ProgressLoader";
import ScoreDisplay from "./scoreDisplay";

export type RgbGameMode = "easy" | "hard";

const gameModes: Record<RgbGameMode, number> = {
  easy: 3,
  hard: 6,
};

const defaultHeaderColor = "gradient";
export const IncorrectColor = "#6e738d"; // Catppuccin Macchiato overlay-0 color

const MAX_TIME = 30; // seconds for the game timer

const getRandomRGBValue = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColors = (num: number) => {
  return Array.from({ length: num }, getRandomRGBValue);
};

const pickColor = (colors: string[]) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const RgbGuessGame = React.memo(() => {
  const [mode, setMode] = useState<RgbGameMode>("hard");
  const [colors, setColors] = useState<string[]>([]);
  const [pickedColor, setPickedColor] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [headerColor, setHeaderColor] = useState<string>(defaultHeaderColor);
  const [gameOver, setGameOver] = useState(false);

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const [timer, setTimer] = useState(0); // seconds elapsed
  const [timerActive, setTimerActive] = useState(false);
  const [bestScore, setBestScore] = useState(() => {
    // Load from localStorage to persist
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("rgb-best-score") || 0);
    }
    return 0;
  });

  // Reset game state
  const resetGame = useCallback(() => {
    const numSquares = mode === "easy" ? gameModes.easy : gameModes.hard;
    const newColors = generateRandomColors(numSquares);
    const newPicked = pickColor(newColors);
    setColors(newColors);
    setPickedColor(newPicked);
    setMessage("");
    setHeaderColor(defaultHeaderColor);
    setGameOver(false);
  }, [mode]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  // Start new timer when a new color is picked
  useEffect(() => {
    if (!gameOver) {
      setTimer(0);
      setTimerActive(true);
    }
  }, [pickedColor, gameOver]);

  // Timer interval
  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t + 0.1 >= MAX_TIME) {
          setGameOver(true);
          setTimerActive(false);
          setMessage("Time's up!");
          return MAX_TIME;
        }
        return +(t + 0.1).toFixed(1); // increment by 0.1s for smoothness
      });
    }, 100); // update every 100ms for smooth animation
    return () => clearInterval(interval);
  }, [timerActive]);

  // Stop timer on game over
  useEffect(() => {
    if (gameOver) setTimerActive(false);
  }, [gameOver]);

  const handleSquareClick = useCallback(
    (color: string, idx: number) => {
      if (gameOver) return;
      if (color === pickedColor) {
        setMessage("Correct!");
        setHeaderColor(color);
        setColors(colors.map(() => color));
        setGameOver(true);
        setTimerActive(false);

        // Score is based on the timer; quicker time, more point
        const bonus = timer < 5 ? 10 : timer < 10 ? 5 : 0;
        const newScore = 10 + bonus;
        setScore((s) => s + newScore);

        // Save best score
        setBestScore((best) => {
          const candidate = score + newScore;
          if (candidate > best) {
            if (typeof window !== "undefined") {
              localStorage.setItem("rgb-best-score", String(candidate));
            }
            return candidate;
          }
          return best;
        });

        setStreak((s) => {
          const newStreak = s + 1;
          setBestStreak((best) => (newStreak > best ? newStreak : best));
          return newStreak;
        });
      } else {
        setMessage("Try another color!");
        setColors(colors.map((c, i) => (i === idx ? IncorrectColor : c)));
        setScore((s) => (s > 0 ? s - 2 : 0)); // -2 points for wrong, min 0
        setStreak(0); // reset streak
      }
    },
    [colors, gameOver, pickedColor, score, timer]
  );

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
      <ScoreDisplay
        score={score}
        timer={timer}
        streak={streak}
        bestScore={bestScore}
        bestStreak={bestStreak}
      />
      <ProgressLoader value={timer} max={MAX_TIME} />
      <RgbHeader
        rgb={pickedColor}
        message={message}
        headerColor={headerColor}
      />
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <RgbResetButton onClick={resetGame} gameOver={gameOver} />
        <RgbModeSelector mode={mode} setMode={setMode} />
      </div>
      <RgbSquares
        colors={colors}
        onSquareClick={handleSquareClick}
        disabled={gameOver}
      />
    </div>
  );
});
RgbGuessGame.displayName = "RgbGuessGame";

export default RgbGuessGame;
