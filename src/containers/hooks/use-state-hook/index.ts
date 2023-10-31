import { useEffect, useRef, useState } from "react";
import { ReducerFn } from "../../types";
import { deepEqual } from "../../utils";

const useStateHook = <T, A>(initialState: T, reducer: ReducerFn<T, A>) => {
  //Global object that needs to be retained in each re-render.
  const state = useRef<T>(initialState);
  //All the subscribers to a particular piece of state.
  const subscribers = useRef<
    {
      sliceFn: Function;
      setSliceFn: Function;
    }[]
  >([]);

  //Function to run to see if the slice has changed. If it has, call the setSlice function.
  const renderOnStateChange = (oldState: T, updatedState: T) => {
    subscribers.current.forEach((subscriber) => {
      const oldSlice = subscriber.sliceFn(oldState);
      const newSlice = subscriber.sliceFn(updatedState);

      if (!deepEqual(oldSlice, newSlice)) {
        subscriber.setSliceFn(newSlice);
      }
    });
  };

  //Function to update the state and also to make call all subscribers to the state.
  const updateState = (type: A, payload: any) => {
    const updatedState = reducer(state.current, { type, payload });

    renderOnStateChange(state.current, updatedState);
    state.current = updatedState;
  };

  //Custom hook to manage the slice and to make sure subscribers array is appended.
  const useSlice = <R>(mapState: (state: T) => R): R => {
    const [slice, setSlice] = useState(mapState(state.current));

    useEffect(() => {
      subscribers.current.push({
        sliceFn: mapState,
        setSliceFn: setSlice,
      });
    }, []);

    return slice;
  };

  return {
    useSlice,
    setState: updateState,
  };
};

export default useStateHook;
