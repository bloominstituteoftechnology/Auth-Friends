import * as actionTypes from "../actions/index";

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
	error: null
};

export const rootReducer = (state = initialState, action) => {
	console.log(`The reducer ran ${action.type}`);
	switch (action.type) {
		case actionTypes.FETCH_FRIENDS:
			return { ...state, fetchingFriends: true };
		case actionTypes.FRIENDS_FETCHED:
			return {
				...state,
				friendsFetched: true,
				fetchingFriends: false,
				friends: action.payload
			};
		case actionTypes.FETCH_ERROR:
			return console.log(action.error);
		case actionTypes.SAVE_FRIEND:
			return {
				...state,
				savingFriends: true,
				friendsFetched: false,
				fetchingFriends: true
			};
		case actionTypes.FRIEND_SAVED:
			return {
				...state,
				friendsSaved: true,
				fetchingFriends: false,
				friends: action.payload,
				savingFriends: false
			};
		case actionTypes.SAVE_ERROR:
			return state;
		case actionTypes.DELETE_FRIEND:
			return state;
		case actionTypes.FRIEND_DELETED:
			console.log(action);
			return {
				...state,
				friends: action.payload,
				friendDeleted: true,
				error: null
			};
		case actionTypes.DELETE_ERROR:
			return state;
		case actionTypes.UPDATE_FRIEND:
			return { ...state, updatingFriend: true };
		case actionTypes.UPDATE_ERROR:
			return state;
		default:
			return state;
	}
};
