import {
	FETCHING_FRIENDS,
	FRIENDS_RECEIVED,
	ERROR_FETCHING_FRIENDS,
	ADDING_FRIEND,
	ADDING_FRIEND_SUCCESSFUL,
	ERROR_ADDING_FRIEND,
} from '../actions';

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
	error: null,
};

export const friends = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return { ...state, fetching: true };
		case FRIENDS_RECEIVED:
			return {
				...state,
				fetching: false,
				fetched: true,
				friends: action.payload,
			};
		case ERROR_FETCHING_FRIENDS:
			return { ...state, fetching: false, error: action.payload };
		case ADDING_FRIEND:
			return { ...state, savingFriends: true };
		case ADDING_FRIEND_SUCCESSFUL:
			return {
				...state,
				friends: action.payload,
				friendsSaved: true,
				savingFriends: false,
			};
		case ERROR_ADDING_FRIEND:
			return { ...state, savingFriends: false };
		default:
			return state;
	}
};
