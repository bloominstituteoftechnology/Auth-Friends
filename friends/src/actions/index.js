// need axios
import axios from 'axios';

// create action types
// import server data from http://localhost:5000
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
// add additional actions for save, update, delete

// get data from server
// axios.get('')

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/friends/');
  return dispatch => {
    dispatch({ type: 'FETCH_FRIENDS' });
    friends.then(({ friends }) => {
      console.log(friends);
      dispatch({ type: FRIENDS_FETCHED, payload: data.friends })
    })
  }
}