import { TodoItem as TodoItemType } from "./todoApp";
import TodoItem from "./todoListItem";

type Props = {
  todoItems: TodoItemType[];
  onRemove: (id: string) => void;
  onToggleCompleted: (id: string) => void;
};

const TodoList = ({ todoItems, onRemove, onToggleCompleted }: Props) => {
  if (todoItems.length === 0) {
    return (
      <div className="text-text font-pixel text-center py-4 tracking-wide">
        Oh, your list is empty! Add a new task!
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          listItem={item}
          onRemove={() => onRemove(item.id)}
          onToggleCompleted={() => onToggleCompleted(item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
