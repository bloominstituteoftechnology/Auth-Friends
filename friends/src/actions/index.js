import axios from "axios";

export const FETCHING_FRIEND = "FETCHING_FRIEND";
export const FETCHED_FRIEND = "FETCHED_FRIEND";
export const ERROR = "ERROR";

export const UPDATING_FRIENDS = "UPDATING_FRIENDS";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const FRIEND_ERROR = "FRIEND_ERROR";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIEND });

  axios
    .get(`http://localhost:5000/api/friends`)
    .then(response => {
      dispatch({ type: FETCHED_FRIEND, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error fetching the data" });
    });
};

export const newFriends = friend => dispatch => {
  dispatch({ type: UPDATING_FRIENDS });

  axios
    .post(`http://localhost:5000/api/friends`, friend)
    .then(response => {
      dispatch({ type: FRIEND_UPDATED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: FRIEND_ERROR, errorMessage: "Error fetching the data" });
    });
};
