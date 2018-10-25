
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const UPDATING_SUCCESS = 'FETCHING_SUCCESS';
export const UPDATING_FAILURE = 'FETCHING_FAILURE';

export const fetchFriends = () => dispatch => {
    // let's do some async stuff! Thanks react-thunk :)
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
          dispatch({ type: FETCHING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_FAILURE, payload: error });
      });
  };

  export const addFriend = (friend) => dispatch => {
    // let's do some async stuff! Thanks react-thunk :)
    dispatch({ type: "UPDATING" });
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(response => {
          dispatch({ type: UPDATING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: UPDATING_FAILURE, payload: error });
      });
  };