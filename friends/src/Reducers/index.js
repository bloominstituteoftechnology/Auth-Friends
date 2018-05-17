import {FETCH_AVENGERS, FETCHING_AVENGERS, SAVING_FRIENDS } from  '../Actions';
const initialState = {
   avengers: [],
   fetching: false,
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

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_AVENGERS:
      return Object.assign({}, state, {
        avengers: state.avengers.concat(action.payload),
        fetching: false
      });
    case FETCHING_AVENGERS:
      return Object.assign({}, state, { fetching: true });
    case SAVING_FRIENDS:
      return Object.assign({}, state, { savingFriends: true });
    default:
      return state;
  }
};

