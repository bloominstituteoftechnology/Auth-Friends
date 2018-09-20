
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";
export const ADD_FRIEND_ERROR = "ADD_FRIEND_ERROR";


export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
            .get("http://localhost:5000/api/friends")
          .then(response => {
            console.log(response);
            dispatch({ type: FETCHED, payload: response.data });
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: ERROR, payload: err });
          });
    };
};

export const addNewFriend = friend => dispatch => {
  dispatch({ type: ADDING_FRIEND });

  axios
      .post("http://localhost:5000/api/friends", friend)
    .then(response => {
        dispatch({ type: FRIEND_ADDED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_ERROR, payload: err });
    });
};