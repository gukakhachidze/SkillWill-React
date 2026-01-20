import { useReducer, useCallback } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { useLanguage } from "./context/LanguageContext";

const initialState = {
  todo: [],
  progress: [],
  done: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todo: [...state.todo, { id: crypto.randomUUID(), text: action.text }],
      };

    case "MOVE": {
      const { from, to, id } = action;
      const item = state[from].find((t) => t.id === id);
      if (!item) return state;

      return {
        ...state,
        [from]: state[from].filter((t) => t.id !== id),
        [to]: [...state[to], item],
      };
    }

    case "DELETE":
      return {
        ...state,
        done: state.done.filter((t) => t.id !== action.id),
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t } = useLanguage();

  const addTodo = useCallback((text) => dispatch({ type: "ADD", text }), []);

  return (
    <div className="app">
      <Header />

      <TodoInput addTodo={addTodo} />

      <div className="columns">
        <TodoList
          title={t("titleTodo")}
          list={state.todo}
          renderActions={(id) => (
            <button onClick={() => dispatch({ type: "MOVE", from: "todo", to: "progress", id })}>
              {t("toProgress")}
            </button>
          )}
        />

        <TodoList
          title={t("titleProgress")}
          list={state.progress}
          renderActions={(id) => (
            <>
              <button onClick={() => dispatch({ type: "MOVE", from: "progress", to: "todo", id })}>
                {t("back")}
              </button>
              <button onClick={() => dispatch({ type: "MOVE", from: "progress", to: "done", id })}>
                {t("done")}
              </button>
            </>
          )}
        />

        <TodoList
          title={t("titleDone")}
          list={state.done}
          renderActions={(id) => (
            <button onClick={() => dispatch({ type: "DELETE", id })}>{t("delete")}</button>
          )}
        />
      </div>
    </div>
  );
}
