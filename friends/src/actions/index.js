import axios from 'axios';
import { 
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  ADDING_FRIEND,
  FRIEND_ADDED,
  REMOVING_FRIEND,
  FRIEND_REMOVED,
  UPDATING_FRIEND,
  FRIEND_UPDATED,
  ERROR
} from './ActionTypes';

export const fetchFriends = () => {
  const getFriends = axios.get('http://localhost:5000/api/friends');
  return (dispatch) => {
    dispatch({ type: FETCHING_FRIENDS });
    getFriends
      .then(response => {
        dispatch({
          type: FRIENDS_FETCHED,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const addFriend = friendObj => {
  const addNewFriend = axios.post('http://localhost:5000/api/friends', friendObj);
  return (dispatch) => {
    dispatch({ type: ADDING_FRIEND });
    addNewFriend
      .then(response => {
        dispatch({
          type: FRIEND_ADDED,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const removeFriend = friendId => {
  const deleteFriend = axios.delete(`http://localhost:5000/api/friends/${friendId}`);
  return (dispatch) => {
    dispatch({ type: REMOVING_FRIEND });
    deleteFriend
      .then(response => {
        console.log('Friend removed:', response.data);
        dispatch({
          type: FRIEND_REMOVED,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const updateFriend = (friendId, friendObj) => {
  const editFriend = axios.put(`http://localhost:5000/api/friends/${friendId}`, friendObj);
  return (dispatch) => {
    dispatch({ type: UPDATING_FRIEND });
      editFriend
        .then(response => {
          dispatch({
            type: FRIEND_UPDATED,
            payload: response.data
          })
        })
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: err
          });
        });
  };
};