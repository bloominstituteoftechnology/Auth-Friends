import {
	FETCHING_FRIENDS,
	FRIENDS_FETCH_SUCCESS,
	POSTING_FRIEND,
	POSTING_FRIEND_SUCCESS,
	ERROR
} from '../actions';

const initialState = {
	friends: [],
	fetching: false,
	posting: false,
	error: null,
};

const friendsReducer = (state = initialState, action) => {
	switch (action.type){
		case FETCHING_FRIENDS:
			return Object.assign({}, state, {fetching: true});
		case FRIENDS_FETCH_SUCCESS:
			return Object.assign({}, state, {friends: action.payload, fetching: false})
		case POSTING_FRIEND:
			return Object.assign({}, state, {posting: true});
		case POSTING_FRIEND_SUCCESS:

			return Object.assign({}, state, {friends: action.payload, posting: false});
		case ERROR:
			return Object.assign({}, state, {fetching: false, posting: false, error: "error"})
		default:
		return state;
	}
}



export default friendsReducer;
