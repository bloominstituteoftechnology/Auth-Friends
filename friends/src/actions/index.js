import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING = "ADDING";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";
export const DELETING = "DELETING";
export const DELETING_SUCCESS = "DELETING_SUCCESS";
export const DELETING_FAILURE = "DELETING_FAILURE";
export const UPDATING = "UPDATING";
export const UPDATING_SUCCESS = "UPDATING_SUCCESS";
export const UPDATING_FAILURE = "UPDATING_FAILURE";

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

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETING });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({ type: DELETING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETING_FAILURE, payload: err }));
};

export const updateFriend = (friend, id) => dispatch => {
  dispatch({ type: UPDATING });
  axios
    .put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(res => dispatch({ type: UPDATING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATING_FAILURE, payload: err }));
};
