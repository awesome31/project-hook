import useStateHook from "../../hooks/use-state-hook";
import reducer from "../../reducer";
import { ACTION_TYPES, DEFAULT_STATE } from "../../reducer/constants";

const Three = () => {
  const { setState, useSlice } = useStateHook(DEFAULT_STATE, reducer);

  const stateBC = useSlice((state) => ({
    countB: state.stateB,
    countC: state.stateC,
  }));

  const stateA = useSlice((state) => ({
    countA: state.stateA,
  }));

  const updateStateA = () => {
    setState(ACTION_TYPES.INCREMENT_STATE_A, {});
  };

  const updateStateB = () => {
    setState(ACTION_TYPES.INCREMENT_STATE_B, {});
  };

  const updateStateC = () => {
    setState(ACTION_TYPES.INCREMENT_STATE_C, {});
  };

  console.log("Component three rendered");

  return (
    <div className="w-full flex flex-col p-4 border border-blue-800">
      <div className="text-lg font-bold">
        Component Three - Multiple useSlice in single component
      </div>
      <div className="h-2" />
      <div className="flex flex-row">
        <button
          className="text text-lg px-4 py-2 border hover:bg-blue-600 bg-blue-300 text-white font-bold"
          onClick={updateStateA}
        >
          Update state A
        </button>
        <button
          className="text text-lg px-4 py-2 border hover:bg-blue-600 bg-blue-300 text-white font-bold"
          onClick={updateStateB}
        >
          Update state B
        </button>
        <button
          className="text text-lg px-4 py-2 border hover:bg-blue-600 bg-blue-300 text-white font-bold"
          onClick={updateStateC}
        >
          Update state C
        </button>
      </div>
      <div className="h-2" />
      <div className="p-4 border border-green-600 text-xl">
        Store BC: {JSON.stringify(stateBC)}
      </div>
      <div className="p-4 border border-green-600 text-xl">
        Store A: {JSON.stringify(stateA)}
      </div>
    </div>
  );
};

export default Three;
