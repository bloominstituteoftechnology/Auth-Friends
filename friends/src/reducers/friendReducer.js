import {
	FETCHING_FRIENDS,
	FETCHED_FRIENDS,
	SAVING_FRIENDS,
	SAVED_FRIENDS,
	ERROR_FRIENDS,
} from './actions';

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

export const friendReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return { ...state, fetchingFriends: true };

		case FETCHED_FRIENDS:
			return {
				...state,
				friends: action.payload,
				friendsFetched: true,
				fetchingFriends: false,
			};

		case SAVING_FRIENDS:
			return { ...state, friendsSaved: false, savingFriends: true };

		case SAVED_FRIENDS:
			return {
				...state,
				friends: action.payload,
				savingFriends: false,
				friendsSaved: true,
			};
		case ERROR_FRIENDS:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
