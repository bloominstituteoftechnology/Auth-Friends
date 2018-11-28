import axios from "axios";

// Action string types
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const getFriends = () => {
	return dispatch => {
		dispatch({ type: LOADING })
		axios
			.get(`http://localhost:5000/api/friends`)
			.then(response => {
				dispatch({
					type: SUCCESS,
					payload: response.data
				})
			})
			.catch(err => {
				dispatch({
					type: FAIL,
					error: err
				})
			})
	}
}