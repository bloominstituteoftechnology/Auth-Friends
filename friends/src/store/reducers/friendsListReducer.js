import { 
	FETCHING_FRIENDS_LIST,
	FETCHING_FRIENDS_LIST_COMPLETE,
	FETCHING_FRIENDS_LIST_ERROR,
} from "../actions";

const initialState = {
	friendsList: [],
	fetchingFriendsList: false,
	fetchingFriendsListError: null,
};

export const friendsListReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCHING_FRIENDS_LIST: {
			return { ...state, fetchingFriendsList: true };
		}
		case FETCHING_FRIENDS_LIST_COMPLETE: {
			return { ...state, friendsList: action.payload, fetchingFriendsList: false, fetchingFriendsListError: '' };
		}
		case FETCHING_FRIENDS_LIST_ERROR: {
			return { ...state, fetchingFriendsListError: action.payload + '', fetchingFriendsList: false };
		}
		default: {
			return state;
		}
	}
}
