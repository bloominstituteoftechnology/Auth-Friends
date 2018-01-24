import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESSFUL = 'ADDING_FRIEND_SUCCESSFUL';
export const ERROR_ADDING_FRIEND = 'ERROR_ADDING_FRIEND';

export const getFriends = () => {
	const friends = axios.get('http://localhost:5000/api/friends/get');
	return dispatch => {
		dispatch({ type: FETCHING_FRIENDS });
		friends
			.then(({ data }) => {
				dispatch({ type: FRIENDS_RECEIVED, payload: data });
			})
			.catch(err => {
				dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
			});
	};
};

export const addFriend = newFriend => {
	const friends = axios.post(
		'http://localhost:5000/api/friends/create',
		newFriend
	);
	return dispatch => {
		dispatch({ type: ADDING_FRIEND });
		friends
			.then(({ data }) => {
				dispatch({ type: ADDING_FRIEND_SUCCESSFUL, payload: data });
			})
			.catch(err => {
				dispatch({ type: ERROR_ADDING_FRIEND, payload: err });
			});
	};
};
