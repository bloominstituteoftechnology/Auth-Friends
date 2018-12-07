import axios from "axios";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";
export const EDIT_FRIEND_START = "EDIT_FRIEND_START";
export const EDIT_FRIEND_SUCCESS = "EDIT_FRIEND_SUCCESS";
export const EDIT_FRIEND_FAILURE = "EDIT_FRIEND_FAILURE";
export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(response => {
      console.log(response);
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};

export const editFriend = (friend, id) => dispatch => {
  dispatch({ type: EDIT_FRIEND_START });
  axios
    .put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(response => {
      dispatch({ type: EDIT_FRIEND_SUCCESS, payload: response.data })
  })
    .catch(err => dispatch({ type: EDIT_FRIEND_FAILURE, payload: err }))
}

export const deleteFriend = (id) => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data })
  })
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }))
}