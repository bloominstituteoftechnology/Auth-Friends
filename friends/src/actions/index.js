import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const GOODBYE_HAPPINESS = 'GOODBYE_HAPPINESS';
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

export const removeFriend = friend => {
  console.log("delete")
  const deleteFriend = axios.delete(`http://localhost:5000/api/friends/${friend.id}`)
  return function(dispatch) {
    dispatch({ type: DELETING_FRIEND })
    deleteFriend
      .then(data => {
        dispatch({ type: FRIEND_DELETED, payload: data.data })
        console.log("delete Fired", data.data)
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err})
        console.log("delete fired with error", err)
      })
    setTimeout(() => {
      dispatch( { type: GOODBYE_HAPPINESS });
    }, 5000);
  }
}



// you need to create a delete and put action next. you'll still need to create the reducer for that. 