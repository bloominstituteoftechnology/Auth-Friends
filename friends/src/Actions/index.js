import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const POST_FRIEND = "POST_FRIEND";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAILURE = "POST_FRIEND_FAILURE";

const URL = "http://localhost:5000/api/Friends";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(ERROR => {
        dispatch({ type: ERROR, payload: ERROR });
      });
  };
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`${URL}/${id}`)
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: error });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: POST_FRIEND });
  axios
    .post(URL, friend)
    .then(response => {
      dispatch({ type: POST_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: POST_FRIEND_FAILURE, payload: error });
    });
};
