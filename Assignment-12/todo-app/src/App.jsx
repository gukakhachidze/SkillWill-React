import { useState, useCallback } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  const addTodo = useCallback((text) => {
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text }]);
  }, []);

  const finishTodo = useCallback((id) => {
    setTodos((prevTodos) => {
      const item = prevTodos.find((t) => t.id === id);
      if (!item) return prevTodos;

      setDone((prevDone) =>
        prevDone.some((d) => d.id === id) ? prevDone : [...prevDone, item]
      );

      return prevTodos.filter((t) => t.id !== id);
    });
  }, []);

  const deleteDone = useCallback((id) => {
    setDone((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveBack = useCallback((id) => {
    setDone((prevDone) => {
      const item = prevDone.find((t) => t.id === id);
      if (!item) return prevDone;

      setTodos((prevTodos) =>
        prevTodos.some((t) => t.id === id) ? prevTodos : [...prevTodos, item]
      );

      return prevDone.filter((t) => t.id !== id);
    });
  }, []);

  const renderTodoActions = useCallback(
    (id) => <button onClick={() => finishTodo(id)}>დასრულება</button>,
    [finishTodo]
  );

  const renderDoneActions = useCallback(
    (id) => (
      <>
        <button onClick={() => moveBack(id)}>დაბრუნება</button>
        <button onClick={() => deleteDone(id)}>წაშლა</button>
      </>
    ),
    [moveBack, deleteDone]
  );

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      <TodoInput addTodo={addTodo} />

      <TodoList title="To Do" list={todos} renderActions={renderTodoActions} />

      <TodoList title="Done" list={done} renderActions={renderDoneActions} />
    </div>
  );
}
