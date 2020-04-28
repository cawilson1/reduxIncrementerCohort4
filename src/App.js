import React, { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return { ...state, counter: state.counter + 1, error: null };
    }
    case "DECREMENT_COUNTER": {
      return { ...state, counter: state.counter - 1, error: null };
    }
    case "INCREMENT_BY_N": {
      return {
        ...state,
        counter: state.counter + Number(action.n),
        error: null
      };
    }
    default: {
      return { ...state, error: true };
    }
  }
};

function incrementByN(n) {
  return { type: "INCREMENT_BY_N", n };
}

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
            dispatch({ type: "INCREMENT_COUNTER" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT_COUNTER" });
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
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
