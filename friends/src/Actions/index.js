import { createActions } from "redux-actions";
import axios from "axios";

const URL = "/api/friends";

export const {
	fetchFriendsRequest,
	fetchFriendsFailure,
	fetchFriendsSuccess,
	addFriendRequest,
	addFriendFailure,
	addFriendSuccess,
	updateFriendsRequest,
	updateFriendsFailure,
	updateFriendsSuccess,
	deleteFriendsRequest,
	deleteFriendsFailure,
	deleteFriendsSuccess,
} = createActions(
	"FETCH_FRIENDS_REQUEST",
	"FETCH_FRIENDS_FAILURE",
	"FETCH_FRIENDS_SUCCESS",
	"ADD_FRIEND_REQUEST",
	"ADD_FRIEND_FAILURE",
	"ADD_FRIEND_SUCCESS",
	"UPDATE_FRIENDS_REQUEST",
	"UPDATE_FRIENDS_FAILURE",
	"UPDATE_FRIENDS_SUCCESS",
	"DELETE_FRIENDS_REQUEST",
	"DELETE_FRIENDS_FAILURE",
	"DELETE_FRIENDS_SUCCESS",
);

// const fetchFriendsRequest = () => ({
// type: "FETCH_FRIEND_REQUEST",
// })

export const fetchFriends = () => async dispatch => {
	dispatch(fetchFriendsRequest());
	try {
		let response = await axios.get(URL);
		dispatch(fetchFriendsSuccess(response.data)); //Object gets paylaod key with this data
	} catch (err) {
		dispatch(fetchFriendsFailure(err));
	}
};

// export const fetchFriends = () =>{
// 	const promise = axios.get(URL);
// 	return dispatch => {
// 		dispatch({ type: 'FETCH_FRIEND_REQUEST' });
// 		promise
// 			.then(response => {
// 				dispatch({
// 					type: 'FETCH_FRIEND_SUCCESS',
// 				});
// 			})
// 			.catch (err => {
// 				dispatch({ type:'FETCH_FRIEND_ERROR'});
// 			})
// 	}
// }

export const addFriend = data =>
	async function(dispatch) {
		dispatch(addFriendRequest());
		try {
			let response = await axios.post(URL, data);
			dispatch(addFriendSuccess(response.data));
		} catch (err) {
			dispatch(addFriendFailure(err));
		}
	};

export const deleteFriend = id =>
	async function(dispatch) {
		dispatch(deleteFriendsRequest());
		try {
			let response = await axios.delete(`${URL}/${id}`);
			dispatch(deleteFriendsSuccess(response.data));
		} catch (err) {
			dispatch(deleteFriendsFailure(err));
		}
	};

export const updateFriend = (id, data) =>
	async function(dispatch) {
		dispatch(updateFriendsRequest());
		try {
			let response = await axios.put(`${URL}/${id}`, data);
			dispatch(updateFriendsSuccess(response.data));
		} catch (err) {
			dispatch(updateFriendsFailure(err));
		}
	};
