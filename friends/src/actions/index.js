import axios from "axios";

export const ERROR = "ERROR";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCH_SUCCESS = "FRIENDS_FETCH_SUCCESS";

export const POSTING_FRIEND = "POSTING_FRIEND";
export const POSTING_FRIEND_SUCCESS = "POSTING_FRIEND_SUCCESS";


export const fetchFriends = () => {
	const promise = axios.get('http://localhost:5000/api/friends');
	return dispatch => {
		dispatch({type: FETCHING_FRIENDS });
		promise
			.then(response => {
				dispatch({type: FRIENDS_FETCH_SUCCESS, payload: response.data })
			})
			.catch(err => {
				console.log(err);
				dispatch({type: ERROR })
			})
	}
}


export const postFriend = friend => {
	const promise = axios.post('http://localhost:5000/api/friends', friend)
	return dispatch => {
		dispatch({type: POSTING_FRIEND});
		promise
			.then(resolve => {
				dispatch({type: POSTING_FRIEND_SUCCESS, payload: resolve.data })
			})
			.catch(err => {
				dispatch({type: ERROR})
			})
	}
}
