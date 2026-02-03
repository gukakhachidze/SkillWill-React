import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";

function UserForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    if (!name.trim()) return;
    dispatch(addUser({ id: Date.now(), name }));
    setName("");
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="User name" />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default UserForm;
