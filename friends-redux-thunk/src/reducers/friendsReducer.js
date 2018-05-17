import {
  FETCHINGFRIENDS,
  FRIENDSFETCHED,
  FRIENDSSAVED,
  SAVINGFRIENDS,
  UPDATINGFRIEND,
  FRIENDUPDATED,
  DELETINGFRIEND,
  FRIENDDELETED,
  ERROR
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHINGFRIENDS:
      return {
        ...state,
        fetchingFriends: true,
        error: null
      };
    case FRIENDSFETCHED:
      return { ...state, friends: action.friends, friendsFetched: true, fetchingFriends: false };
    case FRIENDSSAVED:
    case SAVINGFRIENDS:
    case UPDATINGFRIEND:
    case FRIENDUPDATED:
    case DELETINGFRIEND:
    case FRIENDDELETED:
    case FETCHINGFRIENDS:
    case ERROR:
      return { ...state, error: action.error, fetchingFriends: false };
    default:
      return state;
  }
};
