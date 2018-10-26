import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";

const URL = "http://localhost:5000/api/friends";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(`${URL}`)
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err
      });
    });
};

export const addFriend = friendObj => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post(`${URL}`, friendObj)

    .then(data => {
      dispatch({ type: FRIEND_ADDED, payload: [...data.data] });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const deleteFriend = friendID => dispatch => {
  dispatch({ type: DELETING_FRIEND });
  axios
    .delete(`${URL}/${friendID}`)
    .then(data => {
      dispatch({ type: FRIEND_DELETED, payload: [...data.data] });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const updateFriend = friendObj => dispatch => {
  dispatch({ type: UPDATING_FRIEND });
  axios
    .put(`${URL}/${friendObj.id}`, friendObj)
    .then(data => {
      dispatch({ type: FRIEND_UPDATED, payload: [...data.data] });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};
