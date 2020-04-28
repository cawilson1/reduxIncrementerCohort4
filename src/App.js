import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return { ...state, counter: state.counter + 1, error: null };
  }
  if (action.type === "DECREMENT_COUNTER") {
    return { ...state, counter: state.counter - 1, error: null };
  }
  if (action.type === "SET_ERROR") {
    return { ...state, error: true };
  }
};

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
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "INCREMENT_COUNTER" });
          }}
        >
          Increment
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "DECREMENT_COUNTER" });
          }}
        >
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
