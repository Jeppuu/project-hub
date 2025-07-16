"use client";

import { useState, useEffect, useCallback, memo } from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";

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
      <TodoInput onAdd={addTodoItem} />
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
