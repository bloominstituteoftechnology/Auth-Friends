import { FETCHING_FRIEND, FRIEND_FETCH_SUCCESS, FRIEND_FETCH_ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array friends, Boolean fetching, Boolean fetched, null error.
  friends: [], 
  fetchingFriends: false,
   error: ""
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_FRIEND:
      return Object.assign({}, state, {fetchingFriends: true}); //if we are fetching simply trigger the boolean.
    case FRIEND_FETCH_SUCCESS:
      return Object.assign({}, state, { 
        friends: [...state.friends, ...action.payload], //if our promise was successful, build out the chars array.
      fetchingFriends: false //also, set our boolean to false, because we're no longer fetching
      });
    case FRIEND_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false, //we're also no longer fetching here so set the boolean to false
        error: "Error occured fetching Friends" // now we're getting an error back, set the error message
      });
  
    default:
      return state;
  }
};