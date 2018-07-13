import axios from "axios";
export const GET_FRIENDS = "GET_FRIENDS";
export const GOT_FRIENDS = "GOT_FRIENDS";
export const ERROR = "ERROR";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const SUBMIT_EDIT = "SUBMIT_EDIT";

export const getFriends = URL => {
  return function(dispatch) {
    dispatch({ type: GET_FRIENDS });
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: GOT_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const submitNewFriend = newFriend => {
  return function(dispatch) {
    axios
      .post("http://localhost:5000/api/friends/", newFriend)
      .then(({ data }) => {
        dispatch({ type: GOT_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteFriend = id => {
  return function(dispatch) {
    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(({ data }) => {
        dispatch({ type: GOT_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const submitEdit = (edits, id) => {
  return function(dispatch) {
    axios
      .put(`http://localhost:5000/api/friends/${id}`, edits)
      .then(({ data }) => {
        dispatch({ type: GOT_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
