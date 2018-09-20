import {
	FRIEND_FETCHING,
	FRIEND_FETCHED,
	FRIEND_FETCHING_ERROR,
	ADDING_FRIEND,
	ADDED_FRIEND,
	ADDING_FRIEND_ERROR
} from "../actions";

const initialState = {
	fetchingFriends: false,
	fetchedFriends: false,
	addingFriend: false,
	addedFriend: false,
	friends: [],
	error: null
};

export const friendReducer = (state = initialState, action) => {
	switch (action.type) {
		case FRIEND_FETCHING:
			return { ...state, fetchingFriends: true };
		case FRIEND_FETCHED:
			return { ...state, fetchingFriends: false, friends: action.payload };
		case FRIEND_FETCHING_ERROR:
			console.log(action.payload);
			return { ...state, isLoading: false, error: action.payload };
		case ADDING_FRIEND:
			return { ...state, addingFriend: true };
		case ADDED_FRIEND:
			return { ...state, addingFriend: false, friends: action.payload };
		case ADDING_FRIEND_ERROR:
			console.log(action.payload);
			return { ...state, addingFriend: false, error: action.payload };
		default:
			return state;
	}
};
