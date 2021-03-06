import React, { useState } from "react";
import "./App.css";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementByN,
  decrementByN,
  allowUserInput
} from "./actions";
import { reducer } from "./reducers";
import { CreateStore } from "./store/CreateStore";

function App() {
  const [n, setN] = useState(0);
  const store = CreateStore(reducer);
  console.log("state", store.state);
  return (
    <div className="App">
      <header className="App-header">
        {store.state.incrementers.counter}
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
            disabled={!store.state.allowers.allowed}
            onClick={() => {
              store.dispatch(incrementByN(n));
            }}
          >
            Increment By n
          </button>{" "}
          <button
            disabled={!store.state.allowers.allowed}
            onClick={() => {
              store.dispatch(decrementByN(n));
            }}
          >
            Decrement By n
          </button>
        </div>
        <label> Allow Incrementing By n:</label>
        <input
          type="checkbox"
          defaultChecked={store.state.allowers.allowed}
          onChange={() => {
            store.dispatch(allowUserInput(!store.state.allowers.allowed));
          }}
        />
        <p style={{ color: "white" }}>
          Is Allowed to increment by n? <br />{" "}
          {String(store.state.allowers.allowed)}
        </p>
      </header>
    </div>
  );
}

export default App;
