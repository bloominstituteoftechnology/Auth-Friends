import { ADD_NEW_FRIEND } from "./types";

export const addNewFriend = friend => {
  return {
    type: ADD_NEW_FRIEND,
    payload: friend
  };
};
