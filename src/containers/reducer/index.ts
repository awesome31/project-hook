import { ACTION_TYPES } from "./constants";
import { ActionType, StoreType } from "./types";

const reducer = (state: StoreType, action: ActionType): StoreType => {
  if (action.type === ACTION_TYPES.INCREMENT_STATE_A) {
    return {
      ...state,
      stateA: state.stateA + 1,
    };
  } else if (action.type === ACTION_TYPES.INCREMENT_STATE_B) {
    return {
      ...state,
      stateB: state.stateB + 1,
    };
  } else if (action.type === ACTION_TYPES.INCREMENT_STATE_C) {
    return {
      ...state,
      stateC: state.stateC + 1,
    };
  } else {
    return state;
  }
};

export default reducer;
