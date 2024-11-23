import React, { useState } from "react";
import "./AddInput.css";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const addTodo = () => {
    if (!todo) {
      setError(true);
      return;
    }
    let updatedTodos = [
      ...todos,
      {
        id: new Date().getTime(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  const handleTodoChange = (e) => {
    setError(false);
    setTodo(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={handleTodoChange}
        placeholder="Add a new task here..."
      />
      {error && (
        <p style={{ color: "red" }} data-testid="error-msg">
          There is an error occurred
        </p>
      )}

      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
