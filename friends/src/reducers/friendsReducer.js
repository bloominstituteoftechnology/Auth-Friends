import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  fetching: false,
  fetched: false,
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

    case FETCHING:
    return Object.assign({}, state, { fetching: true });

    case FETCHED:
    return Object.assign({}, state, {
      friends: [...state.friends, ...action.payload], 
      fetching: false 
    });

    case ERROR:
    return Object.assign({}, state, {
      fetching: false, 
      error: "Error fetching friends" 
    });

    default:
      return state;
  }
};
