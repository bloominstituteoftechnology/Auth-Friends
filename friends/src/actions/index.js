import axios from 'axios';

export const ERROR = "ERROR";
export const GET_FRIENDS = "GET_FRIENDS";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const NEW_FRIEND = "NEW_FRIEND";
export const CREATING_FRIEND = "CREATING_FRIEND";

export const getFriends = () => {
	const friends = axios.get('http://localhost:5000/api/friends');
	
	return dispatch => {
		dispatch({type : FETCHING_FRIENDS});
		friends
			.then(response => {
				dispatch({type : GET_FRIENDS, payload : response.data)};
			})
			.catch(Err => {
				dispatch({type : ERROR, payload : Err});
			})
	}
}

export const newFriend = friend => {
	const newFriend = axios.post('http://localhost:5000/api/friends/create',friend);
	
	return dispatch => {
		dispatch({type : CREATING_FRIEND});
		
		newFriend
			.then(({data}) => {
				dispatch({type : CREATE_FRIEND, payload : data});
			})
			.catch(Err => {
				dispatch({type : ERROR, payload : Err});
			})
	}
}
