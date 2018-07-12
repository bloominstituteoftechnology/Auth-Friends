import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_ERROR = "UPDATE_FRIEND_ERROR";

const url = "http://localhost:5000/api";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${url}/friends/`)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ERROR });
    });
};

export const updateFriend = (friend) => dispatch => {
  const { id } = friend;
  dispatch({ type: UPDATE_FRIEND_START });
  axios
    .put(`${url}/friends/${id}`, friend)
    .then(response => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_FRIEND_ERROR });
    });
};