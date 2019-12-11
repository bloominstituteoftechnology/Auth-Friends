const makeReducer = (handlers, initialState) => (
  state = initialState,
  action
) => {
  return handlers.hasOwnProperty(action.type) // eslint-disable-line
    ? handlers[action.type](state, action)
    : state;
};

export default makeReducer;
