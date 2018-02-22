import axios from 'axios';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const getFriends = () => {
	const friends = axios.get('http://localhost:5000/api/friends/get');
	return dispatch => {
		dispatch({type: FETCHING_FRIENDS});
		friends.then((response) => {
			dispatch({type: FETCH_FRIENDS, payload: response.data});
		}).catch((error)=>{
			console.log(error);
		});
	}
}