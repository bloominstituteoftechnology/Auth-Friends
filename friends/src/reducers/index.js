import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	FETCH_FRIENDS_FAILURE,
	ADD_FRIEND_START,
	ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE,
    DELETE_FRIEND_START,
	DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE
} from "../actions";

const initialState = {
	fetchingFriends: false,
	//friendsFetched: false,
	//friendsSaved: false,
	savingFriends: false,
	//updatingFriend: false,
	// friendUpdated: false,
	deletingFriend: false,
	// friendDeleted: false,
	friends: [],
	error: null
};

const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				fetchingFriends: true
			};
		case FETCH_FRIENDS_SUCCESS:
			return {
				...state,
				error: null,
				fetchingFriends: false,
				friends: action.payload
			};
		case FETCH_FRIENDS_FAILURE:
			return {
				...state,
				error: action.payload,
				fetchingFriends: false
			};

		case ADD_FRIEND_START:
			return {
				...state,
				savingFriend: true
			};
		case ADD_FRIEND_SUCCESS:
			return {
				...state,
				savingFriend: false,
				friends: action.payload
			};
		case ADD_FRIEND_FAILURE:
			return {
				...state,
				savingFriend: false,
				error: action.payload
			};

		case DELETE_FRIEND_START:
			return {
				...state,
				deletingFriend: true
			};
		case DELETE_FRIEND_SUCCESS:
			return {
				...state,
				deletingFriend: false,
				friends: action.payload
			};
		case DELETE_FRIEND_FAILURE:
			return {
				...state,
				deletingFriend: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default friendsReducer;
