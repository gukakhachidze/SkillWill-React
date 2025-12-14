import React, { useState } from 'react';

const TodoInput = React.memo(function TodoInput({ addTodo }) {
  console.log('Render: TodoInput');

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
});

export default TodoInput;
