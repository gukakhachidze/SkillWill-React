import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  loading: boolean;
}

const initialState: CounterState = {
  value: 0,
  loading: false,
};

// 🔥 Async action
export const incrementAsync = createAsyncThunk("counter/incrementAsync", async (amount: number) => {
  const response = await new Promise<number>((resolve) => setTimeout(() => resolve(amount), 1000));
  return response;
});

// 🔥 Slice (აქ არის createSlice!)
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // ✅ Sync actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

  // ✅ Async handling
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

// exports
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
