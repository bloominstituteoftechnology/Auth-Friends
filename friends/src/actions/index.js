import axios from 'axios';
import { 
  FETCH_FRIENDS,
  FETCHING_FRIENDS,
  ADD_FRIEND,
  ADDING_FRIEND,
  REMOVE_FRIEND,
  REMOVING_FRIEND,
  UPDATE_FRIEND,
  UPDATING_FRIEND,
  ERROR
} from './ActionTypes';

export const fetchFriends = () => {
  const getFriends = axios.get('http://localhost:5000/api/friends');
  return (dispatch) => {
    dispatch({ type: FETCHING_FRIENDS });
    getFriends
      .then(response => {
        dispatch({
          type: FETCH_FRIENDS,
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
          type: ADD_FRIEND,
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
        dispatch({
          type: REMOVE_FRIEND,
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
            type: UPDATE_FRIEND,
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