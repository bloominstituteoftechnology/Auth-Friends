import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const getFriends = () => {
	const friends = axios.get('http://localhost:5000/api/friends/get');
	return dispatch => {
		dispatch({ type: FETCHING_FRIENDS });
		friends
			.then(({ data }) => {
				console.log('*****data', data);
				dispatch({ type: FRIENDS_RECEIVED, payload: data });
			})
			.catch(err => {
				dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
			});
	}
}
