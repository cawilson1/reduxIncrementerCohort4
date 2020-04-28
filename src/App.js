import React, { useState } from "react";
import "./App.css";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementByN,
  decrementByN
} from "./actions";
import { reducer } from "./reducers";
import { CreateStore } from "./store/CreateStore";

function App() {
  const [n, setN] = useState(0);
  const store = CreateStore(reducer);
  return (
    <div className="App">
      <header className="App-header">
        {store.state.counter}
        <button
          onClick={() => {
            store.dispatch({ type: INCREMENT_COUNTER });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: DECREMENT_COUNTER });
          }}
        >
          Decrement
        </button>
        <div>
          <input onChange={e => setN(e.target.value)} />
          <button
            onClick={() => {
              store.dispatch(incrementByN(n));
            }}
          >
            Increment By n
          </button>{" "}
          <button
            onClick={() => {
              store.dispatch(decrementByN(n));
            }}
          >
            Decrement By n
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
