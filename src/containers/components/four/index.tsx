import useStateHook from "../../hooks/use-state-hook";
import reducer from "../../reducer";
import { ACTION_TYPES, DEFAULT_STATE } from "../../reducer/constants";

const FourOne = (props: any) => {
  const { useSlice, setState } = props;

  const stateAB = useSlice((state: any) => ({
    countA: state.stateA,
    countB: state.stateB,
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

  console.log("Component Four One rendered");

  return (
    <div className="w-full flex flex-col p-4 border border-blue-800">
      <div className="text-lg font-bold">Component Four Two</div>
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

const FourTwo = (props: any) => {
  const { useSlice, setState } = props;

  const stateAB = useSlice((state: any) => ({
    countB: state.stateB,
    countC: state.stateC,
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

  console.log("Component Four Two rendered");

  return (
    <div className="w-full flex flex-col p-4 border border-blue-800">
      <div className="text-lg font-bold">Component Four Two</div>
      <div className="h-2" />
      <div className="flex flex-row">
        <button
          className="text text-lg px-4 py-2 border hover:bg-red-600 bg-red-300 text-white font-bold"
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
        {JSON.stringify(stateAB)}
      </div>
    </div>
  );
};

const Four = () => {
  const store = useStateHook(DEFAULT_STATE, reducer);

  return (
    <>
      <FourOne {...store} />
      <FourTwo {...store} />
    </>
  );
};

export default Four;
