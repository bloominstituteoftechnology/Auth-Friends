import { LOADING, GET_FRIENDS, ERROR } from '../actions';
//TODO: Add additional actions for SAVING, UPDATING, DELETING and possibly rename actionsy

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
  }

  export const friendReducer = (state = initialState, action) => {
      switch(action.type) {
        case LOADING:
            return
        case GET_FRIENDS:
            return
        case ERROR:
            return
          default:
            return state;
      }
  }