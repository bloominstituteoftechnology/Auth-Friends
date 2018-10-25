import axios from "axios";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const fetchFriends = () => {
  const promise = axios.get("http://localhost:5000/api/friends");
  return function(dispatch) {
    dispatch({type: FETCHING});
    promise
      .then(response => dispatch({type: SUCCESS, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};

export const addNewFriend = newFriend => {
  const promise = axios.post("http://localhost:5000/api/friends", newFriend);
  return function(dispatch) {
    promise
      .then(response =>
        dispatch({type: ADD_NEW_FRIEND, payload: response.data})
      )
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};

export const deleteFriend = id => {
  const promise = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return function(dispatch) {
    promise
      .then(response => dispatch({type: DELETE_FRIEND, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};
