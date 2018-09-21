import { 
	FETCHING_FRIENDS_LIST,
	FETCHING_FRIENDS_LIST_COMPLETE,
	FETCHING_FRIENDS_LIST_ERROR,

	DELETING_FRIEND,
	DELETING_FRIEND_COMPLETE,
	DELETING_FRIEND_ERROR
} from "../actions";

const initialState = {
	friendsList: [],
	fetchingFriendsList: false,
	fetchingFriendsListError: null,
};

export const friendsListReducer = (state = initialState, action) => {
	switch(action.type) {
		// Fetching
		case FETCHING_FRIENDS_LIST: {
			return { ...state, fetchingFriendsList: true };
		}
		case FETCHING_FRIENDS_LIST_COMPLETE: {
			return { ...state, friendsList: action.payload, fetchingFriendsList: false, fetchingFriendsListError: '' };
		}
		case FETCHING_FRIENDS_LIST_ERROR: {
			return { ...state, fetchingFriendsListError: action.payload + '', fetchingFriendsList: false };
		}
		//Deleting
		case DELETING_FRIEND: {
			return state;
		}
		case DELETING_FRIEND_COMPLETE: {
			return state;
		}
		case DELETING_FRIEND_ERROR: {
			return state;
		}
		default: {
			return state;
		}
	}
}
