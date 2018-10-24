import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING = "ADDING";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADDING });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => dispatch({ type: ADDING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_FAILURE, payload: err }));
};
