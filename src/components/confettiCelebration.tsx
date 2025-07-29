import React from "react";

const congratulatoryMessages = [
  "Yay!",
  "Hooray!",
  "You did it!",
  "Great job!",
  "Well done!",
  "Awesome!",
  "Keep it up!",
  "Fantastic!",
  "You're amazing!",
  "Bravo!",
  "Way to go!",
  "You crushed it!",
];

const getRandomMessage = () => {
  return congratulatoryMessages[
    Math.floor(Math.random() * congratulatoryMessages.length)
  ];
};

interface ConfettiCelebrationProps {
  show: boolean;
  message?: string; // Optional custom message
}

const ConfettiCelebration = React.memo(
  ({ show, message }: ConfettiCelebrationProps) => {
    if (!show) return null;

    const displayMessage = message || getRandomMessage();

    return (
      <span
        className="flex flex-col text-center gap-2 absolute left-1/2 top-1/2 z-40 text-4xl animate-confetti-pop pointer-events-none"
        style={{ transform: "translate(-50%, -60%)" }}
      >
        <span className="text-shadow-confetti">🎉</span>
        <span className="text-text font-pixel text-sm">{displayMessage}</span>
      </span>
    );
  }
);

ConfettiCelebration.displayName = "ConfettiCelebration";

export default ConfettiCelebration;
