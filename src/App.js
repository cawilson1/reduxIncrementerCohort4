import React, { useReducer, useState } from "react";
import "./App.css";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementByN,
  decrementByN
} from "./actions";
import { reducer } from "./reducers";

const initialState = {
  counter: 0,
  error: null
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [n, setN] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {state.counter}
        <button
          onClick={() => {
            dispatch({ type: INCREMENT_COUNTER });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: DECREMENT_COUNTER });
          }}
        >
          Decrement
        </button>
        <div>
          <input onChange={e => setN(e.target.value)} />
          <button
            onClick={() => {
              dispatch(incrementByN(n));
            }}
          >
            Increment By n
          </button>{" "}
          <button
            onClick={() => {
              dispatch(decrementByN(n));
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
