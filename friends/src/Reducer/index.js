import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR, ADD_FRIEND, UPDATING, UPDATED } from '../Action';
import { combineReducers } from 'redux';

const initialState = {
	friends: [],
	error: null,
	fetchingFriends: false,
	friendsFetched: false,
	addFriend: false,
	addingFriend: false,
	updatingFriend: false,
	friendsSaved: false,
	savingFriends: false,
	friendUpdated: false,
	deletingFriend: false,
	friendDeleted: false
};

const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FRIENDS:
			return {
				...state,
				fetchingFriends: true
			};
		case FRIENDS_FETCHED:
			return {
				...state,
				fetchingFriends: false,
				friends: [ ...state.friends, ...action.payload ]
			};
		case ERROR:
			return {
				...state,
				fetchingFriends: false,
				error: action.payload
			};
		case ADD_FRIEND:
			return {
				...state,
				addingFriend: false,
				friends: action.payload
			};
		case UPDATING:
			return {
				...state,
				updatingFriend: true
			};
		case UPDATED:
			return {
				...state,
				updatingFriend: false,
				friends: [ ...action.payload ]
			};
		default:
			return state;
	}
};

const AppState = combineReducers({
	friendsReducer
});

export default AppState;
