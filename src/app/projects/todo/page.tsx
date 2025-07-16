import Layout from "@/components/layout";
import TodoApp from "@/components/todo/todoApp";

export default function TodoList() {
  return (
    <Layout>
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text drop-shadow-solid-crust mb-8">
          Todo List 📝
        </h2>
      </div>
      <TodoApp />
    </Layout>
  );
}
