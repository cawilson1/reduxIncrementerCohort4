import React, { useReducer } from "react";
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
      return { ...state, counter: state.counter + action.n, error: null };
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
        <button
          onClick={() => {
            dispatch(incrementByN(2));
          }}
        >
          Increment By 2
        </button>
      </header>
    </div>
  );
}

export default App;
