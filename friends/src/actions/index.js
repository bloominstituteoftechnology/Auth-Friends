// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIEND_FETCHED = 'FRIEND_FETCHED';
export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const ERROR = 'ERROR';


export const fetchFriends = () => {
  const getData = axios.get('http://localhost:5000/api/friends/');
  return function(dispatch) {
    dispatch({ type: FETCHING_FRIENDS });
    getData
      .then(someData => {
        setTimeout(() => {
          dispatch({ type: FRIENDS_FETCHED, payload: someData.data });
        }, 500);
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};

export const fetchFriend = (id) => {
  const getData = axios.get(`http://localhost:5000/api/friends/${id}`)

  return function(dispatch) {
    dispatch({ type: FETCHING_FRIEND });
    getData
      .then(someData => {
        console.log("some" , someData)
        setTimeout(() => {
          dispatch({ type: FRIEND_FETCHED, payload: someData.data });
        }, 500);
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};