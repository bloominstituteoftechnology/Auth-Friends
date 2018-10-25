import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR, ADD_FRIEND } from '../Action';
import { combineReducers } from 'redux';

const initialState = {
	fetchingFriends: false,
	friendsFetched: false,
	addFriend: {
		name: '',
		age: '',
		email: ''
	},
	// friendsSaved: false,
	// savingFriends: false,
	// updatingFriend: false,
	// friendUpdated: false,
	// deletingFriend: false,
	// friendDeleted: false,
	friends: [],
	error: null
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
				fetchingFriends: false,
				friends: [ ...state.friends, ...action.payload ]
			};
		default:
			return state;
	}
};

const AppState = combineReducers({
	friendsReducer
});

export default AppState;
