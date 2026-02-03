import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// READ
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

// CREATE
export const addUser = createAsyncThunk("users/add", async (user) => {
  return user; // fake API
});

// DELETE
export const deleteUser = createAsyncThunk("users/delete", async (id) => id);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {
    updateUser(state, action) {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export const { updateUser } = usersSlice.actions;
export default usersSlice.reducer;
