import {
  GETTING_FRIENDS,
  GET_FRIENDS,
  ERROR,
  CREATING_FRIEND,
  CREATE_FRIEND,
  DELETE_FRIEND,
  DELETING_FRIEND,
  UPDATE_FRIEND,
  UPDATING_FRIEND,
  SINGLE_FRIEND,
  CHANGE_UPDATE_FRIEND
} from "../actions";

const initialState = {
  selectedFriend: {},
  updated: false
};

export const oneFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_FRIEND:
      return { ...state, selectedFriend: action.payload, updated: false };
    //Future update case
    case CHANGE_UPDATE_FRIEND:
      return { ...state, updated: !state.updated };
    default:
      return state;
  }
};
