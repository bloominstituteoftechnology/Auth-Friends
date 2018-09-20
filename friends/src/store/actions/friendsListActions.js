// Dependencies
import axios from 'axios';

export const FRIENDS_LIST_FETCH_COMPLETE = 'FRIENDS_LIST_FETCH_COMPLETE';

export const getFriendsList = () => dispatch => {
	axios
		.get('http://localhost:5000/api/friends')
		.then(res => {
			console.log('getFriendsList action', res);
			dispatch({ type: FRIENDS_LIST_FETCH_COMPLETE });
		})
		.catch(err => console.error(err));
}
