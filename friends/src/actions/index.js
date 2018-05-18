// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const FRIEND_FETCHED = 'FRIEND_FETCHED';

export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

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
        setTimeout(() => {
          dispatch({ type: FRIEND_FETCHED, payload: someData.data });
        }, 500);
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};

export const saveFriend = (friend) => {
  const getData = axios.post('http://localhost:5000/api/friends', friend)

  return function(dispatch) {
    dispatch({ type: SAVING_FRIEND });
    getData
      .then(someData => {
        console.log("SAVED" , someData)
        setTimeout(() => {
          dispatch({ type: FRIEND_SAVED, payload: someData.data });
        }, 500);
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};

export const deleteFriend = (friend) => {
  const getData = axios.delete(`http://localhost:5000/api/friends/${friend.id}`)

  return function(dispatch) {
    dispatch({ type: DELETING_FRIEND });
    getData
      .then(someData => {
        setTimeout(() => {
          dispatch({ type: FRIEND_DELETED, payload: someData.data });
        }, 500);
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};