import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

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

export const addFriend = (friend) => {
	const endpoint = axios.post('http://localhost:5000/api/friends/create', friend);
	return dispatch => {
		endpoint.then((response) => {
			dispatch({type: ADD_FRIEND, payload: response.data});
		}).catch((error)=>{
			console.log(error);
		});
	}
}