// need axios
import axios from 'axios';

// create action types
// import server data from http://localhost:5000
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const UPDATE_FRIENDS = 'UPDATE_FRIENDS';
export const FRIENDS_UPDATED = 'FRIENDS_UPDATED';
// add additional actions for save, update, delete

// get data from server
// axios.get('')

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: 'FETCH_FRIENDS' });
    friends.then(({ data }) => {
      dispatch({ type: FRIENDS_FETCHED, payload: data })
    })
  }
}

export const addFriend = value => {
  const friends = this.state;
  return dispatch => {
    dispatch({ type: 'UPDATE_FRIENDS' });
    friends.then(({ data }) => {
      dispatch({ type: FRIENDS_UPDATED, payload: data })
    })
  };
};