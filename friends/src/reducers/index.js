import {FETCHING, FETCHED, ERROR, SAVING_FRIENDS, FRIENDS_SAVED} from  '../actions';


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
       return Object.assign({}, state, {fetchingFriends: false, savingFriends: false, friends: action.friends, friendsFetched: true});

	case SAVING_FRIENDS:
        return Object.assign({}, state, {fetchingFriends: false, friendsFetched: false, savingFriends: true, friendsSaved: false, error: null});


	case FRIENDS_SAVED:
        return Object.assign({}, state, {fetchingFriends: false, friendsFetched: true, friends: action.friends, savingFriends: false, friendsSaved: true, error: null});

        case ERROR:
        return Object.assign({}, state, {error: true});

        default:
        return state;
 
  }
};

export default friendsReducer;
