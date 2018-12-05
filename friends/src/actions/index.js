import axios from 'axios';
export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const requestFriends = () => (dispatch) => {
	dispatch({ type: REQUEST_SENT });
	axios
		.get('http://localhost:5000/api/friends')
		.then((response) => {
			console.log(response);
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};
