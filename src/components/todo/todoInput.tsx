import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";

type TodoInputProps = {
  onAdd: (item: { title: string; body: string; timeEstimate: number }) => void;
};
const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [timeEstimate, setTimeEstimate] = useState(0);

  const handleAdd = () => {
    if (!title.trim() || !body.trim() || timeEstimate <= 0) return;
    onAdd({ title: title.trim(), body: body.trim(), timeEstimate });
    setTitle("");
    setBody("");
    setTimeEstimate(0);
  };

  const onEnter = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-3 items-center">
      <input
        className="w-full font-pixel text-lg px-2 pb-2 border-0 border-b-1 border-lavender bg-transparent text-text transition focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={onEnter}
        placeholder="What do you need to do?"
      />
      <textarea
        className="w-full px-2 pb-2 border-0 border-b-1 border-lavender bg-transparent text-text resize-none transition focus:outline-none"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        onKeyDown={onEnter}
        placeholder="What steps are needed?"
        rows={2}
      />

      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        className="w-full px-2 pb-2 border-0 border-b-1 border-lavender bg-transparent text-text focus:outline-none transition"
        value={timeEstimate === 0 ? "" : timeEstimate}
        onChange={(e) => {
          const val = e.target.value.replace(/[^0-9]/g, "");
          setTimeEstimate(val === "" ? 0 : Number(val));
        }}
        placeholder="How many minutes will it take?"
      />
      <Button
        onClick={handleAdd}
        className="w-[80%] mt-2 gradient-to-r-custom rounded-xl text-base font-pixel drop-shadow-solid-crust hover:scale-105 transition cursor-pointer"
      >
        ✔
      </Button>
    </div>
  );
};

export default TodoInput;
