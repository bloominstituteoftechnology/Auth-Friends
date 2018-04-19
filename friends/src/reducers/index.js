import {
	FETCHED_FRIENDS,
	FETCHING_FRIENDS,
	ERROR
} from "../actions/fetchFriends";

const initialState = {
	fetching: false,
	error: null,
	friends: []
};

const friendsReducer = (state = initialState, action) => {
	// console.log(state);
	switch (action.type) {
		case FETCHING_FRIENDS:
			return Object.assign({}, state, { fetching: true });
		case FETCHED_FRIENDS:
			return Object.assign({}, state, {
				fetching: false,
				friends: [...action.payload]
			});
		case ERROR:
			return Object.assign({}, state, {
				pending: false,
				error: action.payload
			});
		default:
			return state;
	}
};

export default friendsReducer;
