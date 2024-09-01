import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setEditId(null);
  };

  const handleEditKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === "Enter") {
      editTodo(id, e.currentTarget.value);
    } else if (e.key === "Escape") {
      setEditId(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a todo"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center mb-2 bg-gray-100 p-2 rounded"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            {editId === todo.id ? (
              <input
                type="text"
                defaultValue={todo.text}
                onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                onBlur={() => setEditId(null)}
                className="flex-grow p-1 border rounded"
                autoFocus
              />
            ) : (
              <span
                className={`flex-grow ${
                  todo.done ? "line-through text-gray-500" : ""
                }`}
                onDoubleClick={() => setEditId(todo.id)}
              >
                {todo.text}
              </span>
            )}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-2 text-red-500"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
