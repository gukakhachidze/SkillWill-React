import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const finishTodo = (id) => {
    const item = todos.find((t) => t.id === id);
    setTodos(todos.filter((t) => t.id !== id));
    setDone([...done, item]);
  };

  const deleteDone = (id) => {
    setDone(done.filter((t) => t.id !== id));
  };

  const moveBack = (id) => {
    const item = done.find((t) => t.id === id);
    setDone(done.filter((t) => t.id !== id));
    setTodos([...todos, item]);
  };

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      <TodoInput addTodo={addTodo} />

      <TodoList
        title="To Do"
        list={todos}
        renderActions={(id) => (
          <button onClick={() => finishTodo(id)}>დასრულება</button>
        )}
      />

      <TodoList
        title="Done"
        list={done}
        renderActions={(id) => (
          <>
            <button onClick={() => moveBack(id)}>დაბრუნება</button>
            <button onClick={() => deleteDone(id)}>წაშლა</button>
          </>
        )}
      />
    </div>
  );
}
