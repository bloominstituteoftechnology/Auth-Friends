import axios from "axios";
// action types
const FETCHED_FRIENDS = "FETCHED_FRIENDS";
const FETCHING_FRIENDS = "FETCHING_FRIENDS";
const CREATE_FRIENDS = "CREATE_FRIENDS";
const ERROR = "ERROR";

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
