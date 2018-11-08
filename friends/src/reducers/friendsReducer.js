import { FETCHING, FETCHED, SAVING, SAVED, ERROR } from '../actions/friendsActions';
 const initialState = {   
    friends: [],
    error: null,
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
};
 export const friendReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetchingFriends: true};
    case FETCHED:
      return {...state, friends: action.payload, fetchingFriends: false, friendsFetched: true};
    case SAVING:
      return {...state, friendsFetched: false, savingFriends: true};
    case SAVED:
      return {...state, savingFriends: false, friendsSaved: true};
    case ERROR:
      return {...state, fetchingFriends: false, friendsFetched: false, friendsSaved: false, savingFriends: false, error: action.payload}
    default:
      return state;
  }
};