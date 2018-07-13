import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED'
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR'

export const POSTING_FRIEND = 'POSTING_FRIEND'
export const FRIEND_POSTED = 'FRIEND_POSTED'
export const FRIEND_POSTING_ERROR = 'FRIEND_POSTING_ERROR'

export const DELETING_FRIEND = 'DELETING_FRIEND'
export const FRIEND_DELETED = 'FRIEND_DELETED'
export const FRIEND_DELETING_ERROR = 'FRIEND_DELETING_ERROR'

export const FETCHING_FRIEND = 'FETCHING_FRIEND'
export const FRIEND_FETCHED = 'FRIEND_FETCHED'
export const FRIEND_FETCH_ERROR = 'FRIEND_FETCH_ERROR'

const baseURL = 'http://localhost:5000/api/friends/'

export function getFriends(baseURL){
  return function(dispatch) {
    dispatch({type:FETCHING_FRIENDS});

    axios
      .get(baseURL)
      .then(({ data }) => {
        dispatch({ type: FRIENDS_FETCHED, payload:data });
      })
      .catch(err => {
        dispatch({ type: FRIENDS_FETCH_ERROR, payload:err });
      });
  };
}

export function postFriend(newFriend){
  return function(dispatch){
    dispatch({type:POSTING_FRIEND});

    axios
      .post(baseURL, newFriend )
      .then(({ data }) => {
        dispatch({ type: FRIEND_POSTED, payload:data });
      })
      .catch(err => {
        dispatch({ type: FRIEND_POSTING_ERROR, payload:err });
      });
  }
}

export function deleteFriend(id){
  return function(dispatch){
    dispatch({type:DELETING_FRIEND});

    axios
      .delete( baseURL+id )
      .then(({ data }) => {
        dispatch({ type: FRIEND_DELETED, payload:data });
      })
      .catch(err => {
        dispatch({ type: FRIEND_DELETING_ERROR, payload:err });
      });
  }
}

export function getFriend(id){
  return function(dispatch) {
    dispatch({type:FETCHING_FRIEND});

    axios
      .get(baseURL+id)
      .then(({ data }) => {
        dispatch({ type: FRIEND_FETCHED, payload:data });
      })
      .catch(err => {
        dispatch({ type: FRIEND_FETCH_ERROR, payload:err });
      });
  };
}