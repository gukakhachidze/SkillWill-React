import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            done: false,
          },
        };
      },
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleDone(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;
