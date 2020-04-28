//action types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const INCREMENT_BY_N = "INCREMENT_BY_N"; //only used locally for action function
const DECREMENT_BY_N = "DECREMENT_BY_N"; //only used locally for action function

export function incrementByN(n) {
  return { type: INCREMENT_BY_N, n };
}
export function decrementByN(n) {
  return { type: DECREMENT_BY_N, n };
}
