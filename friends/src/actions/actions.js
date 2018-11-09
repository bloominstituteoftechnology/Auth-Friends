import axios from 'axios';
import thunk from 'redux-thunk';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
        console.log('RESPONSE ', response.data);
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: 'Failed to load friends data'
        });
      });
  };
};

// 'http://localhost:5000

//POST

export const addFriend = newFriend => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .post('http://localhost:5000/api/friends', newFriend)
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: 'Failed to add new friend' });
      });
  };
};
