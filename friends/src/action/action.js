import axios from "axios";

export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const ERROR = "ERROR";
export const LOADING_FRIENDS = "LOADING_FRIENDS";
export const CREATE_FRIEND = "CREATE_FRIEND";

export const fetchingFriends = () => {
  return dispatch => {
    dispatch({ type: LOADING_FRIENDS });
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        dispatch({ type: FETCHED_FRIENDS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Your friends are hiding because you suck ${err}`
        });
      });
  };
};

export const createFriend = postData => {
  return dispatch => {
    dispatch({ type: LOADING_FRIENDS });
    axios
      .post(`http://localhost:5000/api/friends`, postData)
      .then(response => {
        dispatch({ type: FETCHED_FRIENDS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Your friends are hiding because you suck ${err}`
        });
      });
  };
};

export const deleteFriend = id => {
  return dispatch => {
    dispatch({ type: LOADING_FRIENDS });
    axios
      .delete(`http://localhost:5000/api/friends/:${id}`)
      .then(response => {
        dispatch({ type: FETCHED_FRIENDS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `That friend wants to hang around ${err}`
        });
      });
  };
};

