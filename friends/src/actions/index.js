import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const ADDED_FRIENDS = 'ADDED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })
  axios.get('http://localhost:5000/api/friends').then(response => {
    dispatch({ type: FETCHED_FRIENDS , friends: response.data })
  }).catch(error => {
    dispatch({ type: ERROR, errorMessage: 'Error fetching data' })
  })
}

// Do I need to pass `friends` to `addFriends`?
export const addFriends = () => dispatch => {
  dispatch({ type: ADDING_FRIENDS })
  axios.post('http://localhost:5000/api/friends').then(response => {
    dispatch({ type: ADDED_FRIENDS, friends: response.data })
  }).catch(error => {
    dispatch({ type: ERROR, errorMessage: 'Error posting data' })
  })
}