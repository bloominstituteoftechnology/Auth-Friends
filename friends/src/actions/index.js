import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const GOT_FRIENDS = "GOT_FRIENDS";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

export const addFriend = friend => {
  return dispatch => {
    dispatch({ type: ADDING_FRIEND });
    axios
      .post("http://localhost:5000/api/friends", friend)
      .then(response =>
        dispatch({ type: GOT_FRIENDS, payload: response.data })
      );
  };
};
