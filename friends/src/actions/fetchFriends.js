import axios from "axios";
// action types
export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const ERROR = "ERROR";

export const fetchFriends = () => {
	const friends = axios.get("http://localhost:5000/api/friends");
	return dispatch => {
		dispatch({ type: FETCHING_FRIENDS });
		friends
			.then(response => {
				console.log(response);
				dispatch({ type: FETCHED_FRIENDS, payload: response.data });
			})
			.catch(error => {
				console.log(error);
				dispatch({ type: ERROR, payload: "Error fetching friends!" });
			});
	};
};

export const createFriends = friend => {
	const friends = axios.post("http://localhost:5000/api/friends", friend);
	return dispatch => {
		friends
			.then(response => {
				dispatch(fetchFriends());
			})
			.catch(error => {
				console.log(error);
				dispatch({ type: ERROR, payload: "Error posting friend!" });
			});
	};
};
