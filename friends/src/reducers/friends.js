import {
	START_ACTION,
	FETCHING_FRIENDS,
	FRIENDS_RECEIVED,
	FRIENDS_RECEIVED_FINISH,
	ERROR_FETCHING_FRIENDS,
	ADDING_FRIEND,
	ADDING_FRIEND_SUCCESSFUL,
	ADDING_FRIEND_FINISH,
	ERROR_ADDING_FRIEND,
	EDITING_FRIEND,
	EDITING_FRIEND_SUCCESSFUL,
	EDITING_FRIEND_FINISH,
	ERROR_EDITING_FRIEND,
	DELETING_FRIEND,
	DELETING_FRIEND_SUCCESSFUL,
	DELETING_FRIEND_FINISH,
	ERROR_DELETING_FRIEND,
} from '../actions';

const initialState = {
	fetchingFriends: false,
	friendsFetched: false,
	savingFriends: false,
	friendsSaved: false,
	updatingFriend: false,
	friendUpdated: false,
	deletingFriend: false,
	friendDeleted: false,
	okToLoad: false,
	friends: [],
	error: null,
};

export const friends = (state = initialState, action) => {
	switch (action.type) {
		case START_ACTION:
			return {
				...state,
				okToLoad: false,
			};

		// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

		case FETCHING_FRIENDS:
			return {
				...state,
				fetchingFriends: true,
			};
		case FRIENDS_RECEIVED:
			return {
				...state,
				fetchingFriends: false,
				friendsFetched: true,
				friends: action.payload,
			};
		case FRIENDS_RECEIVED_FINISH:
			return {
				...state,
				friendsFetched: false,
				okToLoad: true,
			};
		case ERROR_FETCHING_FRIENDS:
			return { ...state, fetchingFriends: false, error: action.payload };

		// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

		case ADDING_FRIEND:
			return {
				...state,
				savingFriends: true,
			};
		case ADDING_FRIEND_SUCCESSFUL:
			return {
				...state,
				savingFriends: false,
				friendsSaved: true,
				friends: action.payload,
			};
		case ADDING_FRIEND_FINISH:
			return {
				...state,
				friendsSaved: false,
				okToLoad: true,
			};
		case ERROR_ADDING_FRIEND:
			return { ...state, savingFriends: false };

		// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

		case EDITING_FRIEND:
			return {
				...state,
				updatingFriend: true,
			};
		case EDITING_FRIEND_SUCCESSFUL:
			return {
				...state,
				updatingFriend: false,
				friendUpdated: true,
				friends: action.payload,
			};
		case EDITING_FRIEND_FINISH:
			return {
				...state,
				friendUpdated: false,
				okToLoad: true,
			};
		case ERROR_EDITING_FRIEND:
			return { ...state, updatingFriend: false, error: action.payload };

		// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

		case DELETING_FRIEND:
			return {
				...state,
				deletingFriend: true,
			};
		case DELETING_FRIEND_SUCCESSFUL:
			return {
				...state,
				deletingFriend: false,
				friendDeleted: true,
				friends: action.payload,
			};
		case DELETING_FRIEND_FINISH:
			return {
				...state,
				friendDeleted: false,
				okToLoad: true,
			};
		case ERROR_DELETING_FRIEND:
			return { ...state, deletingFriend: false, error: action.payload };
		default:
			return state;
	}
};
