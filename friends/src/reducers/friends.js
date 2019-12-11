import { makeReducer, setState } from "Utils";

const setFriends = setState("friends");

const SET_FRIENDS = (state, { payload }) =>
  setFriends(state, payload);

export default makeReducer({
  SET_FRIENDS
});
