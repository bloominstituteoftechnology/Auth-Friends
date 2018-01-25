import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const CREATE_FRIEND = 'CREATE_FRIEND';
export const CREATE_FRIEND_SUCCESS = 'CREATE_FRIEND_SUCCESS';
export const CREATE_FRIEND_FAILURE = 'CREATE_FRIEND_FAILURE';

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

export const createFriend = (values) => {
	return (dispatch) => {
		dispatch({ type: CREATE_FRIEND });
		axios
			.post('http://localhost:5000/api/friends/create', values)
			.then(({ data }) => {
				dispatch({ type: CREATE_FRIEND_SUCCESS, payload: data });
			})
			.catch((error) => {
				dispatch({ type: CREATE_FRIEND_FAILURE, payload: error });
			});
	}
}
