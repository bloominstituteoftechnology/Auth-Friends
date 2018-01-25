import { FETCHING_FRIENDS, FRIENDS_RECEIVED, ERROR_FETCHING_FRIENDS } from '../actions';

const initialState = {
	fetchingFriends: false,
	friendsFetched: false,
	friendsSaved: false,
	savingFriends: false,
	updatingFriends: false,
	friendsUpdated: false,
	deletingFriends: false,
	friendsDeleted: false,
	friends: [],
	error: null
}

export const getFriendsReducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return {...state, fetchingFriends: true};
		case FRIENDS_RECEIVED:
			return {
				...state,
				friendsFetched: true,
				fetchingFriends: false,
				friends: action.payload
			}
		case ERROR_FETCHING_FRIENDS:
			return { ...state, fetchingFriends: false, error: action.payload }
		default:
			return state;
	}
};
