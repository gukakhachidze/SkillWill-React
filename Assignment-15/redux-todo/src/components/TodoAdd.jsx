import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function TodoAdd() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoAdd;
