import { useReducer } from "react";

export function CreateStore(reducerFn) {
  const [state, dispatch] = useReducer(
    reducerFn,
    reducerFn(undefined, "") //console log this line somewhere if there is confusion
  );
  return { state, dispatch }; //this object is the store; it contains the current state and the dispatch to mutate it
}
