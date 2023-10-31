type ActionType<A> = {
  type: A;
  payload: any;
};

export type ReducerFn<T, A> = (state: T, action: ActionType<A>) => T;
