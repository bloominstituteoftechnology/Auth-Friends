import axios from "axios";

export const FRIEND_FETCHING = "FRIEND_FETCHING";
export const FRIEND_FETCHED = "FRIEND_FETCHED";
export const FRIEND_FETCHING_ERROR = "FRIEND_FETCHING_ERROR";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADDED_FRIEND = "ADDED_FRIEND";
export const ADDING_FRIEND_ERROR = "ADDING_FRIEND_ERROR";

export const getFriends = () => dispatch => {
	dispatch({ type: FRIEND_FETCHING });
	const promise = axios.get("http://localhost:5000/api/friends");

	promise
		.then(response => {
			dispatch({ type: FRIEND_FETCHED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: FRIEND_FETCHING_ERROR, payload: err });
		});
};

export const addFriend = friend => dispatch => {
	dispatch({ type: ADDING_FRIEND });

	axios
		.post("http://localhost:5000/api/friends", friend)
		.then(response => {
			dispatch({ type: ADDED_FRIEND, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ADDING_FRIEND_ERROR, payload: err });
		});
};
