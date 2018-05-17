import {
  FETCHING_FRIEND,
  FETCHED_FRIEND,
  DELETE_FRIEND,
  SUBMIT_FRIEND,
  EDIT_FRIEND
} from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  isFetched: false
};

export const friendsReducer = (state = initialState, { type, friends, id }) => {
  switch (type) {
    case FETCHING_FRIEND:
      return {
        ...state,
        isFetching: true
      };
    case FETCHED_FRIEND:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        friends
      };
    case DELETE_FRIEND:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        friends
      };
    case SUBMIT_FRIEND:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        friends
      };
    case EDIT_FRIEND:
      const index = friends.findIndex(friend => friend.id === id);
      return {
        ...state,
        friends: [
          ...friends.slice(0, index),
          (friends[index] = {
            ...friends[index],
            isEditing: true
          }),
          ...friends.slice(index + 1)
        ]
      };
    default:
      return state;
  }
};
