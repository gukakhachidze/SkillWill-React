import { useState } from 'react';

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const submit = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="დავალება..."
      />
      <button onClick={submit}>დამატება</button>
    </div>
  );
}
