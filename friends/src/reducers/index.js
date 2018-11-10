const initialState = { blah: "Hello World!"};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};