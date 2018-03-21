import axios from "axios";

export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD_FRIEND = "ADD_FRIEND";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const FETCHING = "FETCHING";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error fetching the data" });
    });
};

export const addFriends = friend => dispatch => {
  dispatch({ type: ADDING });

  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(response => {
      dispatch({ type: ADDED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error posting the data" });
    });
};

export const updateFriend = (friend, id) => dispatch => {
  dispatch({ type: UPDATING });

  axios
    .put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(response => {
      dispatch({ type: UPDATED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error updating the data" });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETING });

  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: DELETED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error deleting the data" });
    });
};
