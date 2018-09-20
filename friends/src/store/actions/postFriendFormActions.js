// Dependencies
import axios from 'axios';

// Actions
export const POSTING_NEW_FRIEND = 'POSTING_NEW_FRIEND';
export const POSTING_NEW_FRIEND_COMPLETE = 'POSTING_NEW_FRIEND_COMPLETE';
export const POSTING_NEW_FRIEND_ERROR = 'POSTING_NEW_FRIEND_ERROR';


export const postNewFriend = friend => dispatch => {
	dispatch({ type: POSTING_NEW_FRIEND });
	
	axios
		.post('http://localhost:5000/api/friends', friend)
		.then(res => {
			dispatch({ type: POSTING_NEW_FRIEND_COMPLETE });
		})
		.catch(err => {
			console.error(err);
			dispatch({ type: POSTING_NEW_FRIEND_ERROR, payload: err});
		});
}
