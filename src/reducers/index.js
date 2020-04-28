export const reducer = (
  state = {
    counter: 0,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return { ...state, counter: state.counter + 1 };
    }
    case "DECREMENT_COUNTER": {
      return { ...state, counter: state.counter - 1 };
    }
    case "INCREMENT_BY_N": {
      return {
        ...state,
        counter: state.counter + Number(action.n)
      };
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
