import {
	FETCHING_FRIENDS,
	FRIENDS_RECEIVED,
	ERROR_FETCHING_FRIENDS,
	CREATE_FRIEND,
	CREATE_FRIEND_SUCCESS,
	CREATE_FRIEND_FAILURE,
	DELETE_FRIEND,
	DELETE_FRIEND_SUCCESS,
	DELETE_FRIEND_FAILURE
} from '../actions';

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

export const friendsReducer = (state=initialState, action) => {
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
			return {
				...state,
				fetchingFriends: false,
				error: action.payload
			}
		case CREATE_FRIEND:
			return {
				...state,
				savingFriends: true,
				friendsSaved: false
			}
		case CREATE_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload,
				savingFriends: false,
				friendsSaved: true
			}
		case CREATE_FRIEND_FAILURE:
			return {
				...state,
				savingFriends: false,
				friendsSaved: false,
				error: action.payload
			}
		case DELETE_FRIEND:
			return {
				...state,
				deletingFriends: true,
				friendsDeleted: false
			}
		case DELETE_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload,
				deletingFriends: false,
				friendsDeleted: true
			}
		case DELETE_FRIEND_FAILURE:
			return {
				...state,
				deletingFriends: false,
				friendsDeleted: false,
				error: action.payload
			}
		default:
			return state;
	}
};
