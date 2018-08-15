import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/friends';

export const fetchFriends = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_FRIENDS });

    axios.get(URL)
          .then( res => dispatch({ type: FRIENDS_FETCHED, payload: res.data }))
          .catch( err => dispatch({ type: ERROR, payload: err }));
  }
};

export const saveFriend = (id, friend) => {
  return function(dispatch) {
    dispatch({ type: SAVING_FRIEND });

    axios.post(URL + id, friend)
          .then( res => dispatch({ type: FRIEND_SAVED, payload: res.data }))
          .catch( err => dispatch({ type: ERROR, payload: err }));
  }
};

export const updateFriend = (id, friend) => {
  return function(dispatch) {
    dispatch({ type: UPDATING_FRIEND });

    axios.put(URL + id, friend)
          .then( res => dispatch({ type: FRIEND_UPDATED, payload: res.data }))
          .catch( err => dispatch({ type: ERROR, payload: err }));
  }
};

export const deleteFriend = id => {
  return function(dispatch) {
    dispatch({ type: DELETING_FRIEND });

    axios.delete(URL + id)
          .then(res => dispatch({ type: FRIEND_DELETED, payload: res.data }))
          .catch( err => dispatch({ type: ERROR, payload: err }));
  }
}
