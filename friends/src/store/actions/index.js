import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS",
  FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS",
  FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE",
  GET_SINGLE_FRIEND = "GET_SINGLE_FRIEND",
  GET_SINGLE_FRIEND_SUCCESS = "GET_SINGLE_FRIEND_SUCCESS",
  GET_SINGLE_FRIEND_FAILURE = "GET_SINGLE_FRIEND_FAILURE",
  ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS",
  ADD_FRIEND = "ADD_FRIEND",
  ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE",
  EDIT_FRIEND = "EDIT_FRIEND",
  EDIT_FRIEND_SUCCESS = "EDIT_FRIEND_SUCCESS",
  EDIT_FRIEND_FAILURE = "EDIT_FRIEND_FAILURE",
  DELETE_FRIEND = "DELETE_FRIEND",
  DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS",
  DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

const URL = "http://localhost:5000/api/friends/";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(URL)
    .then(({ data }) => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: data });
    })
    .catch(err => dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios
    .post(URL, friend)
    .then(({ data }) => dispatch({ type: ADD_FRIEND_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};

export const getSingleFriend = friend => dispatch => {
  dispatch({ type: GET_SINGLE_FRIEND });
  axios
    .get(`URL/${friend.id}`, friend)
    .then(({ data }) =>
      dispatch({ type: GET_SINGLE_FRIEND_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: GET_SINGLE_FRIEND_FAILURE, payload: err }));
};

export const editFriend = friend => dispatch => {
  dispatch({ type: EDIT_FRIEND });
  axios
    .put(`URL/${friend.id}`, friend)
    .then(({ data }) => dispatch({ type: EDIT_FRIEND_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: EDIT_FRIEND_FAILURE, payload: err }));
};

export const deleteFriend = friend => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`${URL}${friend}`, friend)
    .then(({ data }) =>
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
};
