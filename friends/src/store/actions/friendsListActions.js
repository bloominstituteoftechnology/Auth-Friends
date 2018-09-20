// Dependencies
import axios from 'axios';

// Actions
export const FETCHING_FRIENDS_LIST = 'FETCHING_FRIENDS_LIST';
export const FETCHING_FRIENDS_LIST_COMPLETE = 'FETCHING_FRIENDS_LIST_COMPLETE';
export const FETCHING_FRIENDS_LIST_ERROR = 'FETCHING_FRIENDS_LIST_ERROR';

export const getFriendsList = () => dispatch => {
	dispatch({ type: FETCHING_FRIENDS_LIST });
	
	axios
		.get('http://localhost:5000/api/friends')
		.then(res => {
			dispatch({ type: FETCHING_FRIENDS_LIST_COMPLETE, payload: res.data });
		})
		.catch(err => {
			console.error(err);
			dispatch({ type: FETCHING_FRIENDS_LIST_ERROR, payload: err});
		});
}
