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
       <div key={todo._id}>
        <p>{todo.task}</p>
        <button>Delete</button>
</div>
      ))}
    </div>
  );
}

export default TodoList;