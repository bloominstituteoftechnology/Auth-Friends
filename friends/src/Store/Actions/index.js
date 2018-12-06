import axios from 'axios';

export const FETCH_FRIENDS_REQUEST = 'FETCH_ITEMS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const ADD_FRIENDS_REQUEST = 'ADD_ITEM_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_ITEM_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_REQUEST });
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log('fetch finished');
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
  };
