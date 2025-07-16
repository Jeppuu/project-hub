"use client";

import { useState, useEffect, useCallback, memo } from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "../ui/dialog";

export type TodoItem = {
  id: string;
  title: string;
  body: string;
  timeEstimate: number; // in minutes
  completed: boolean;
  //priority: "low" | "medium" | "high";
};

const STORAGE_KEY = "todos";

const TodoApp = memo(() => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [open, setOpen] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem(STORAGE_KEY);
      if (savedItems) setTodoItems(JSON.parse(savedItems));
    } catch {
      setTodoItems([]);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoItems));
  }, [todoItems]);

  const addTodoItem = useCallback(
    (item: Omit<TodoItem, "id" | "completed">) => {
      const newItem = { ...item, id: Date.now().toString(), completed: false };
      setTodoItems((prev) => [...prev, newItem]);
      setOpen(false);
    },
    []
  );

  const removeTodoItem = useCallback((id: string) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toggleCompleted = useCallback((id: string) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }, []);

  return (
    <div className="max-w-xl w-full mx-auto flex flex-col gap-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="self-center mb-2 px-6 py-2 rounded-xl gradient-to-r-custom text-crust font-pixel border-2 border-lavender drop-shadow-solid-crust hover:scale-105 transition cursor-pointer">
            + Add new task
          </button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-xl bg-surface-0 border-2 border-crust rounded-xl p-6 drop-shadow-solid-crust">
          <DialogHeader>
            <DialogTitle className="font-pixel text-xl p-2 text-center">
              Add a new task
            </DialogTitle>
          </DialogHeader>
          <TodoInput onAdd={addTodoItem} />
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 px-3 py-1 rounded-lg bg-maroon text-crust font-bold border-2 border-crust drop-shadow-solid-crust hover:bg-red transition cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <TodoList
        todoItems={todoItems}
        onRemove={removeTodoItem}
        onToggleCompleted={toggleCompleted}
      />
    </div>
  );
});

TodoApp.displayName = "TodoApp";

export default TodoApp;
