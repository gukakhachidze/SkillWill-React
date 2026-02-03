import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={mode}>
      <ThemeToggle />
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
