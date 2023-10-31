import { StoreType } from "./types";

export const ACTION_TYPES = {
  INCREMENT_STATE_A: "INCREMENT_STATE_A",
  INCREMENT_STATE_B: "INCREMENT_STATE_B",
  INCREMENT_STATE_C: "INCREMENT_STATE_C",
};

export const DEFAULT_STATE: StoreType = {
  stateA: 0,
  stateB: 0,
  stateC: 0,
};
