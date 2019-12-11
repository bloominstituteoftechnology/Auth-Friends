import { makeReducer, setState } from "Utils";

const setStateProp = setState("state");

const SET_STATE = (state, { payload }) =>
  setStateProp(state, payload);

export default makeReducer({
  SET_STATE
});
