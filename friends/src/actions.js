import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_ITEMS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const ADD_FRIEND_START = 'ADD_ITEM_START';
export const ADD_FRIEND_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_ITEM_FAILURE';

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response => {
      console.log('Adding friend', response);
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      console.log('fetch finished');
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};