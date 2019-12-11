const setState = key => (state, payload) => ({
  ...state,
  [key]: payload
});

export default setState;
