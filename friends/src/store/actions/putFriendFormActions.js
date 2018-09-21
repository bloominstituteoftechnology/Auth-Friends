// Dependencies
import axios from 'axios';

// Actions
export const PUTTING_NEW_FRIEND = 'PUTTING_NEW_FRIEND';
export const PUTTING_NEW_FRIEND_COMPLETE = 'PUTTING_NEW_FRIEND_COMPLETE';
export const PUTTING_NEW_FRIEND_ERROR = 'PUTTING_NEW_FRIEND_ERROR';


export const putNewFriend = friend => dispatch => {
	dispatch({ type: PUTTING_NEW_FRIEND });

	axios
		.put(`http://localhost:5000/api/frieds/${ friend.id }`, friend)
		.then(res => {
			dispatch({ type: PUTTING_NEW_FRIEND_COMPLETE });
		})
		.catch(err => {
			console.error(err);
			dispatch({ type: PUTTING_NEW_FRIEND_ERROR, payload: err});
		});
}
