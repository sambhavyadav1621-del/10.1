import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>📝 Todo List</h1>
      <AddTodo refresh={fetchTodos} />
      <TodoList todos={todos} refresh={fetchTodos} />
    </div>
  );
}

export default App;
