import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./app/store";
import { increment, decrement, incrementAsync } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const loading = useSelector((state: RootState) => state.counter.loading);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(incrementAsync(5))}>Async +5</button>

      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
