const incrementers = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return { ...state, counter: state.counter + 1 };
    }
    case "INCREMENT_BY_N": {
      return {
        ...state,
        counter: state.counter + Number(action.n)
      };
    }
    case "DECREMENT_COUNTER": {
      return { ...state, counter: state.counter - 1 };
    }

    case "DECREMENT_BY_N": {
      return {
        ...state,
        counter: state.counter - Number(action.n)
      };
    }
    default:
      return { ...state };
  }
};

const allowers = (state = { allowed: true }, action) => {
  switch (action.type) {
    case "ALLOW_USER_INPUT":
      return {
        ...state,
        allowed: !state.allowed
      };
    default:
      return { ...state };
  }
};

//runs each of these every time.
//if, for ex, state.allowers is undefined, it assigns state
export const reducer = (state = {}, action) => {
  return {
    incrementers: incrementers(state.incrementers, action),
    allowers: allowers(state.allowers, action)
  };
};
