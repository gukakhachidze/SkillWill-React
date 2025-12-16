import { useReducer, useCallback } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const initialState = {
  todos: [],
  done: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), text: action.payload },
        ],
      };

    case 'FINISH_TODO': {
      const item = state.todos.find((t) => t.id === action.payload);
      if (!item) return state;

      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
        done: [...state.done, item],
      };
    }

    case 'DELETE_DONE':
      return {
        ...state,
        done: state.done.filter((t) => t.id !== action.payload),
      };

    case 'MOVE_BACK': {
      const item = state.done.find((t) => t.id === action.payload);
      if (!item) return state;

      return {
        todos: [...state.todos, item],
        done: state.done.filter((t) => t.id !== action.payload),
      };
    }

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = useCallback(
    (text) => dispatch({ type: 'ADD_TODO', payload: text }),
    []
  );

  const finishTodo = useCallback(
    (id) => dispatch({ type: 'FINISH_TODO', payload: id }),
    []
  );

  const deleteDone = useCallback(
    (id) => dispatch({ type: 'DELETE_DONE', payload: id }),
    []
  );

  const moveBack = useCallback(
    (id) => dispatch({ type: 'MOVE_BACK', payload: id }),
    []
  );

  const renderTodoActions = useCallback(
    (id) => (
      <button className="btn-done" onClick={() => finishTodo(id)}>
        დასრულება
      </button>
    ),
    [finishTodo]
  );

  const renderDoneActions = useCallback(
    (id) => (
      <>
        <button className="btn-back" onClick={() => moveBack(id)}>
          დაბრუნება
        </button>
        <button className="btn-delete" onClick={() => deleteDone(id)}>
          წაშლა
        </button>
      </>
    ),
    [moveBack, deleteDone]
  );

  return (
    <div className="app">
      <TodoInput addTodo={addTodo} />

      <div className="columns">
        <TodoList
          title="To Do"
          list={state.todos}
          renderActions={renderTodoActions}
        />

        <TodoList
          title="Done"
          list={state.done}
          renderActions={renderDoneActions}
        />
      </div>
    </div>
  );
}
