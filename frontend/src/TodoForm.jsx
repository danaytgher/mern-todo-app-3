import { useState } from "react";
import axios from "axios";

function TodoForm() {
  const [task, setTask] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/todos", {
      task,
    });

    setTask("");
    window.location.reload();
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;