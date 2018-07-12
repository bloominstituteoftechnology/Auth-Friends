import {FETCHING, FETCHED, ERROR, SAVING_FRIENDS, FRIENDS_SAVED, DELETING_FRIEND, FRIEND_DELETED} from  '../actions';


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

	case DELETING_FRIEND:
        return Object.assign({}, state, {deletingFriend: true, friendsFetched: false, friendDeleted: false, fetchingFriends: false, error: null});
		
	
	case FRIEND_DELETED:
        return Object.assign({}, state, {deletingFriend: false, friendsFetched: true, friendDeleted: true, fetchingFriends: false, friends: action.friends, error: null});

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
