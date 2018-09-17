import { FETCHING_FRIENDS, FRIENDS_FETCH_SUCCESS, FRIENDS_FETCH_ERROR } from '../actions';

const initialState = { friends: [], fetching: false, error: null};

const friendsReducer = (state = initialState, action) => {
	switch (action.type){
		case FETCHING_FRIENDS:
			return Object.assign({}, state, {fetching: true});
		case FRIENDS_FETCH_SUCCESS:
			return Object.assign({}, state, {friends: action.payload, fetching: false});
		case FRIENDS_FETCH_ERROR:
			return Object.assign({}, state, {fetching: false, error: "error fetching freiends"})
		default:
		return state;
	}
}

export default friendsReducer;
