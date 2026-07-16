import { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo._id}>{todo.task}</p>
      ))}
    </div>
  );
}

export default TodoList;