import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const ERROR = 'ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ADDING_FRIEND = 'ADDING_FRIEND';

export const fetchFriends = () => {
  return dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    axios
      .get('http://localhost:5000/api/friends/')
      .then(response => {
        console.log(response);
        dispatch({type: FETCH_FRIENDS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });   
  };
};

export const addFriend = (friend) => {
  return dispatch => {
    dispatch({type: ADDING_FRIEND});
    axios
      .post('http://localhost:5000/api/friends/', friend)
      .then(response => {
        dispatch({type: ADD_FRIEND, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  }
}