// Import Axios
import axios from "axios";

// Create 3 action types
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

// Action creator will be a function that returns a function
export const getFriends = () => {
	const loadFriends = axios.get(`http://localhost:5000/api/friends`) // Gets friends
	return dispatch => {
		dispatch({ type: LOADING });
		loadFriends
			.then(response => {
				console.log(response);
				dispatch({
					type: SUCCESS,
					payload: [response.data.results]
				});
			})
			.catch(err => {
				dispatch({
					type: FAIL,
					payload: "I have no friends"
				});
			});
	};
}