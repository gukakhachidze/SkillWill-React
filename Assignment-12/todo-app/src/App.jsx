import { useReducer, useCallback } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const initialState = {
  todo: [],
  progress: [],
  done: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo, { id: crypto.randomUUID(), text: action.payload }],
      };

    case 'MOVE': {
      const { from, to, id } = action.payload;
      const item = state[from].find((t) => t.id === id);
      if (!item) return state;

      return {
        ...state,
        [from]: state[from].filter((t) => t.id !== id),
        [to]: [...state[to], item],
      };
    }

    case 'DELETE':
      return {
        ...state,
        done: state.done.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = useCallback((text) => dispatch({ type: 'ADD_TODO', payload: text }), []);

  const move = useCallback(
    (from, to, id) => dispatch({ type: 'MOVE', payload: { from, to, id } }),
    []
  );

  const deleteDone = useCallback((id) => dispatch({ type: 'DELETE', payload: id }), []);

  return (
    <div className="app">
      <TodoInput addTodo={addTodo} />

      <div className="columns">
        <TodoList
          title="To Do"
          list={state.todo}
          renderActions={(id) => (
            <button
              className="btn-progress"
              onClick={() => move('todo', 'progress', id)}
            >
              In Progress
            </button>
          )}
        />

        <TodoList
          title="In Progress"
          list={state.progress}
          renderActions={(id) => (
            <>
              <button
                className="btn-back"
                onClick={() => move('progress', 'todo', id)}
              >
                უკან
              </button>
              <button
                className="btn-done"
                onClick={() => move('progress', 'done', id)}
              >
                Done
              </button>
            </>
          )}
        />

        <TodoList
          title="Done"
          list={state.done}
          renderActions={(id) => (
            <>
              <button
                className="btn-back"
                onClick={() => move('done', 'progress', id)}
              >
                In Progress
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteDone(id)}
              >
                წაშლა
              </button>
            </>
          )}
        />
      </div>
    </div>
  );
}
