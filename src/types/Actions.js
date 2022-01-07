// @flow
// https://blog.blueberry.io/sagas-reducer-actions-and-selectors-in-react-flow-1bb471035fb2

export type ActionWithoutPayloadType<T> = {|
  type: T,
  payload?: null,
|};

export type ActionWithPayloadType<T, P> = {|
  type: T,
  payload: P,
|};
