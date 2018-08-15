import { createActions } from "redux-actions";
import axios from 'axios';

const URL = '/api/friends'

export const {
	fetchFriendsRequest,
	fetchFriendsFailure,
	fetchFriendsSuccess,
	saveFriendsRequest,
	saveFriendsFailure,
	saveFriendsSuccess,
	updateFriendsRequest,
	updateFriendsFailure,
	updateFriendsSuccess,
	deleteFriendsRequest,
	deleteFriendsFailure,
	deleteFriendsSuccess,
} = createActions(
	"FETCH_FRIENDS_REQUEST",
	"FETCH_FRIENDS_FAILURE",
	"SAVE_FRIENDS_REQUEST",
	"SAVE_FRIENDS_FAILURE",
	"UPDATE_FRIENDS_REQUEST",
	"UPDATE_FRIENDS_FAILURE",
	"DELETE_FRIENDS_REQUEST",
	"DELETE_FRIENDS_FAILURE",
	"FETCH_FRIENDS_SUCCESS",
	"SAVE_FRIENDS_SUCCESS",
	"UPDATE_FRIENDS_SUCCESS",
	"DELETE_FRIENDS_SUCCESS",
);

export const fetchFriends = () => async dispatch => {
    dispatch(fetchFriendsRequest());
    try {
        let response = await axios.get(URL);
        dispatch(fetchFriendsSuccess(response.data));
    } catch(err) {
        dispatch(fetchFriendsFailure(err))
    }
};
