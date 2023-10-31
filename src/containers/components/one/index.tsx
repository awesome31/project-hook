import useStateHook from "../../hooks/use-state-hook";
import reducer from "../../reducer";
import { ACTION_TYPES, DEFAULT_STATE } from "../../reducer/constants";
import { StoreType } from "../../reducer/types";

const One = () => {
  const { setState, useSlice } = useStateHook<StoreType, string>(
    DEFAULT_STATE,
    reducer
  );

  const stateAB = useSlice((state) => ({
    countA: state.stateA,
    countB: {
      count: state.stateB,
    },
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

  console.log("Component One rendered");

  return (
    <div className="w-full flex flex-col p-4 border border-blue-800">
      <div className="text-lg font-bold">Component One - Nested objects</div>
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
          className="text text-lg px-4 py-2 border hover:bg-red-600 bg-red-300 text-white font-bold"
          onClick={updateStateC}
        >
          Update state C
        </button>
      </div>
      <div className="h-2" />
      <div className="p-4 border border-green-600 text-xl">
        {JSON.stringify(stateAB)}
      </div>
    </div>
  );
};

export default One;
