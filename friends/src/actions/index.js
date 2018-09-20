import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_COMPLETE = 'ADD_FRIEND_COMPLETE';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    axios
      .get('http://localhost:5000/api/friends')
      .then((response) => {
        dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addFriend = (newFriend) => {
  return (dispatch) => {
    dispatch({ type: ADD_FRIEND_START });

    axios
      .post('http://localhost:5000/api/friends', newFriend)
      .then((response) => {
        dispatch({ type: ADD_FRIEND_COMPLETE, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_FRIEND_ERROR });
      });
  };
};
