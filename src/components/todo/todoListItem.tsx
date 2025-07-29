import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { TodoItem } from "./todoApp";
import React, { useState, useEffect } from "react";
import ConfettiCelebration from "../confettiCelebration";

type Props = {
  listItem: TodoItem;
  onRemove: () => void;
  onToggleCompleted: () => void;
};

const TodoListItem = React.memo(
  ({ listItem, onRemove, onToggleCompleted }: Props) => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
      if (listItem.completed) {
        setShowConfetti(true);
        const timer = setTimeout(() => setShowConfetti(false), 1200);
        return () => clearTimeout(timer);
      }
    }, [listItem.completed]);

    return (
      <li
        onClick={onToggleCompleted}
        className={`relative flex flex-col md:flex-row md:items-center justify-between px-4 py-3 bg-surface-0 border-2 border-crust rounded-xl gap-2 cursor-pointer select-none transition drop-shadow-solid-crust hover:scale-105`}
        unselectable="on"
        tabIndex={0}
        aria-checked={listItem.completed}
        role="checkbox"
      >
        {/* Green overlay when completed */}
        {listItem.completed && (
          <div className="absolute inset-0 rounded-xl bg-green/40 pointer-events-none z-10" />
        )}

        {/* Confetti animation */}
        {showConfetti && <ConfettiCelebration show={true} />}

        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label="Remove"
          className="absolute top-2 right-2 border-2 border-crust rounded-lg bg-maroon drop-shadow-solid-crust hover:bg-red cursor-pointer z-30"
        >
          <Trash2 className="h-4 w-4 text-crust" />
        </Button>
        <div className="flex-1 relative z-20">
          <div
            className={`font-pixel text-lg md:text-xl transition ${
              listItem.completed ? "line-through " : ""
            }`}
          >
            {listItem.title}
          </div>
          {listItem.body && (
            <div
              className={`text-sm mt-1 ${
                listItem.completed ? "line-through" : ""
              }`}
            >
              {listItem.body}
            </div>
          )}
          <div className="text-xs text-subtext-1 mt-1">
            ⏱ {listItem.timeEstimate} min
          </div>
        </div>
      </li>
    );
  }
);

TodoListItem.displayName = "TodoListItem";

export default TodoListItem;
