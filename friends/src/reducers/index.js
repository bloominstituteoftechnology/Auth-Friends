import {FETCHING, FETCHED, ERROR} from  '../actions';


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
	
	const friendsReducer = (state = initialState, action) => {
  	switch (action.type) {
        case FETCHING:
        return Object.assign({}, state, {fetchingFriends: true, friendsFetched: false, error: null});

        case FETCHED:
       return Object.assign({}, state, {fetchingFriends: false, friends: action.friends, friendsFetched: true});

        case ERROR:
        return Object.assign({}, state, {error: true});

        default:
        return state;
 
  }
};

export default friendsReducer;
