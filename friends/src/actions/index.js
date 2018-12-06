import axios from "axios";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

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

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND_START });
    axios
        .delete(`${URL}/${id}`)
        .then(responce => {
            console.log("Deleted friend finished", responce)
            dispatch({
                type: DELETE_FRIEND_SUCCESS,
                payload: responce.data
            })
        })
        .catch(err => {
            console.log("Delete Friend Failed", err);
            dispatch({ type: DELETE_FRIEND_FAILURE, payload: err });
        })
}
