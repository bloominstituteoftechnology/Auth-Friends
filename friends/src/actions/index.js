import axios from "axios";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

const URL = "http://localhost:5000/api/friends";

export const getFriends = () => dispatch => {
	dispatch({ type: FETCH_FRIENDS_START });
	axios
		.get(URL)
		.then(response => {
			console.log("Fetch finished", response);
			dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
		})
		.catch(err => {
			console.log("Fetch failed", err);
			dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err });
		});
};

export const addFriend = friend => dispatch => {
	dispatch({ type: ADD_FRIEND_START });
	axios
		.post(URL, friend)
		.then(response => {
			console.log("Add Friend Finished", response);
			dispatch({
				type: ADD_FRIEND_SUCCESS,
				payload: response.data
			});
		})
		.catch(err => {
            console.log("Add Friend Failed", err);
            dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
		});
};
