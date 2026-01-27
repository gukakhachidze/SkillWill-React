import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import DoneTodos from "./components/DoneTodos";

function App() {
  return (
    <div>
      <h1>Redux Todo App</h1>
      <TodoAdd />
      <TodoList />
      <DoneTodos />
    </div>
  );
}

export default App;
