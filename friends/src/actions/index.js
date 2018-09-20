// HUZZAH ALL THE ACTIONS HERE
import axios from 'axios';


export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND';

export const FRIEND_ADDED = 'FRIEND_ADDED';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const FRIEND_EDITED = 'FRIEND_EDITED';

// First we need our fetch reducers

export const fetchReducer = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    
    axios.get('http://localhost:5000/api/friends')
      .then(res => {
        dispatch({ type: FETCHED, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: err })
      })
  }
}

/*
  - Friend reducers
    + Here will post or delete, or put (if we edit friends later on)
*/


export const addFriend = friend => {
  return dispatch => {
    dispatch({ ADD_FRIEND });

    axios.post('http://localhost:5000/api/friends', friend = {
      name: name,
      age: age,
      email: email
    })
    .then(res => {
      dispatch({ type: FRIEND_ADDED, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
      
  }
}

/*
  - Update reducer
    + Here we will update our friends' data: NOT MVP
*/