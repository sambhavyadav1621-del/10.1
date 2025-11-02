import React, { useState } from "react";
import axios from "axios";

function AddTodo({ refresh }) {
  const [text, setText] = useState("");

  const addTodo = async () => {
    if (!text.trim()) return alert("Please enter a todo");
    await axios.post("http://localhost:5000/api/todos", { text });
    setText("");
    refresh();
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        placeholder="Enter new todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
