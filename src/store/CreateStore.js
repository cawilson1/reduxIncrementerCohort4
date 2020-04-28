import { useReducer } from "react";

const initialState = {
  counter: 0,
  error: null
};

export function CreateStore(reducerFn) {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return { state, dispatch }; //this object is the store; it contains the current state and the dispatch to mutate it
}
