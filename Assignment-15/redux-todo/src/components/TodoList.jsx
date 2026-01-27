import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../store/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>All Todos</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => dispatch(toggleDone(todo.id))}>Done</button>

          <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
