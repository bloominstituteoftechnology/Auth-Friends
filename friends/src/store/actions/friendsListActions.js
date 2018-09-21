// Dependencies
import axios from 'axios';

// Actions
export const FETCHING_FRIENDS_LIST = 'FETCHING_FRIENDS_LIST';
export const FETCHING_FRIENDS_LIST_COMPLETE = 'FETCHING_FRIENDS_LIST_COMPLETE';
export const FETCHING_FRIENDS_LIST_ERROR = 'FETCHING_FRIENDS_LIST_ERROR';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETING_FRIEND_COMPLETE = 'DELETING_FRIEND_COMPLETE';
export const DELETING_FRIEND_ERROR = 'DELETING_FRIEND_ERROR';

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

export const deleteFriend = id => dispatch => {
	dispatch({ type: DELETING_FRIEND });

	axios
		.delete(`http://localhost:5000/api/friends/${ id }`)
		.then(res => {
			dispatch({ type: DELETING_FRIEND_COMPLETE });
		})
		.catch(err => {
			console.error(err);
			dispatch({ type: DELETING_FRIEND_ERROR, payload: err });
		})
}
