import {
	FETCHING_FRIENDS,
	FRIENDS_RECEIVED,
	ERROR_FETCHING_FRIENDS,
	ADDING_FRIEND,
	ADDING_FRIEND_SUCCESSFUL,
	ERROR_ADDING_FRIEND,
	EDITING_FRIEND,
	EDITING_FRIEND_SUCCESSFUL,
	ERROR_EDITING_FRIEND,
	DELETING_FRIEND,
	DELETING_FRIEND_SUCCESSFUL,
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
	friends: [],
	error: null,
};

export const friends = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return {
				...state,
				fetchingFriends: true,
				friendsFetched: false,

				friendsSaved: false,
				friendUpdated: false,
				friendDeleted: false,
			};
		case FRIENDS_RECEIVED:
			return {
				...state,
				fetchingFriends: false,
				friendsFetched: true,
				friends: action.payload,
			};
		case ERROR_FETCHING_FRIENDS:
			return { ...state, fetchingFriends: false, error: action.payload };
		case ADDING_FRIEND:
			return {
				...state,
				savingFriends: true,
				friendsSaved: false,

				friendsFetched: false,
				friendUpdated: false,
				friendDeleted: false,
			};
		case ADDING_FRIEND_SUCCESSFUL:
			return {
				...state,
				friends: action.payload,
				savingFriends: false,
				friendsSaved: true,
			};
		case ERROR_ADDING_FRIEND:
			return { ...state, savingFriends: false };
		case EDITING_FRIEND:
			return {
				...state,
				updatingFriend: true,
				friendUpdated: false,

				friendsFetched: false,
				friendsSaved: false,
				friendDeleted: false,
			};
		case EDITING_FRIEND_SUCCESSFUL:
			console.log(action.payload);
			return {
				...state,
				friends: action.payload,
				updatingFriend: false,
				friendUpdated: true,
			};
		case ERROR_EDITING_FRIEND:
			return { ...state, updatingFriend: false, error: action.payload };
		case DELETING_FRIEND:
			return {
				...state,
				deletingFriend: true,
				friendDeleted: false,

				friendsFetched: false,
				friendsSaved: false,
				friendUpdated: false,
			};
		case DELETING_FRIEND_SUCCESSFUL:
			console.log(action.payload);
			return {
				...state,
				friends: action.payload,
				deletingFriend: false,
				friendDeleted: true,
			};
		case ERROR_DELETING_FRIEND:
			return { ...state, deletingFriend: false, error: action.payload };
		default:
			return state;
	}
};
