import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialTodos = [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a To-Do App", completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todoListHolder">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
