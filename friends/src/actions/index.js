import axios from 'axios';

export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FETCH_ERROR = "FETCH_ERROR";
export const SAVE_FRIEND = "SAVE_FRIEND";
export const FRIEND_SAVED = "FRIEND_SAVED";
export const SAVE_ERROR = "SAVE_ERROR";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";
export const DELETE_ERROR = "DELETE_ERROR";

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS });
    axios
        .get("http://localhost:5000/api/friends")
        .then(({ data }) => dispatch({ type: FRIENDS_FETCHED, payload: data }))
        .catch(error => {
            dispatch({ type: FETCH_ERROR, errorMessage: 'Error fetching friends' });
        });
};

export const saveFriend = data => dispatch => {
    dispatch({ type: SAVE_FRIEND });
    axios
        .post("http://localhost:5000/api/friends", data)
        .then(({ data }) => {
            dispatch({ type: FRIEND_SAVED, payload: data });
        })
        .catch(error => {
            dispatch({ type: SAVE_ERROR, errorMessage: 'Error saving friend' });
        });
};

export const updateFriend = () => dispatch => {
    dispatch({ type: UPDATE_FRIEND });
    axios
        .put(`http://localhost:5000/api/friends`)
        .then(({ data }) => {
            dispatch({ type: FRIEND_UPDATED, payload: data });
        })
        .catch(error => {
            dispatch({ type: UPDATE_ERROR, errorMessage: 'Error updating friend' });
        });
};

export const deleteFriend = (id) => dispatch => {
    dispatch({ type: DELETE_FRIEND });
    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(({ data }) => dispatch({ type: FRIEND_DELETED, payload: data }))
        .catch(error => {
            dispatch({ type: DELETE_ERROR, errorMessage: 'Error deleting friend' });
        });
};
