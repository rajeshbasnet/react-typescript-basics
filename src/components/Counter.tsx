import { useReducer } from "react";

type CounterState = {
  count: number;
};

enum ActionEnum {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

type ActionProps = {
  type: ActionEnum.INCREMENT | ActionEnum.DECREMENT;
  payload?: string;
};

const initialState: CounterState = {
  count: 0,
};

function reducer(state: CounterState, action: ActionProps): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return checkCounter(state.count);

    default:
      return state;
  }
}

function checkCounter(value: number): CounterState {
  return value <= 0 ? { count: value } : { count: value - 1 };
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function counterHandler(type: ActionEnum) {
    dispatch({ type });
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => counterHandler(ActionEnum.INCREMENT)}>
        Increment
      </button>
      <p>{state?.count}</p>
      <button onClick={() => counterHandler(ActionEnum.DECREMENT)}>
        Decrement
      </button>
    </div>
  );
};
