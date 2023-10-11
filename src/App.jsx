import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { AddTodoInput } from "./components/AddTodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo List</h1>

      <AddTodoInput />

      {todos.map((todo) => (
        <TodoItem description={todo.description} />
      ))}
    </>
  );
}

export default App;
