import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAILURE = "UPDATE_FETCH_FAILURE";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
    });
};

export const updateFriend = (data, id) => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  axios
    .put(`http://localhost:5000/api/${id}`, id)
    .then(res => {
      console.log(res.data);
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err });
    });
};
