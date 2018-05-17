import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const ERROR = 'ERROR'
//still need actions for update/ing; delete/ing; 

export const fetchFriends = () => {
  const getFriends = axios.get('http://localhost:5000/api/friends/');
  return function(dispatch) {
    dispatch({ type: FETCHING_FRIENDS });
    getFriends
      .then(data => {
        dispatch({ type: FRIENDS_FETCHED, payload: data.data })
        console.log("FETCHED fired", data.data)
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
        console.log("FETCHED fired with error", err)
      })
  }
}

export const newFriend = friend => {
  const postFriends = axios.post('http://localhost:5000/api/friends/', friend);
  return function(dispatch) {
    dispatch({ type: SAVING_FRIENDS })
    postFriends
      .then(data => {
        dispatch({ type: FRIENDS_SAVED, payload: data.data })
        console.log("newFriend Fired", data.data)
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
        console.log("newFriend fired with error", err)
      })
  }
}
// you need to create a delete and put action next. you'll still need to create the reducer for that. 