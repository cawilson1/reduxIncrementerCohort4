export const reducer = (state, action) => {
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
    case "DECREMENT_BY_N": {
      return {
        ...state,
        counter: state.counter - Number(action.n),
        error: null
      };
    }
    default: {
      return { ...state, error: true };
    }
  }
};
