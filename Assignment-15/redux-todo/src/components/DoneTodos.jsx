import { useSelector } from "react-redux";

function DoneTodos() {
  const doneTodos = useSelector((state) => state.todos.filter((todo) => todo.done));

  return (
    <div>
      <h3>Done Todos</h3>
      {doneTodos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default DoneTodos;
