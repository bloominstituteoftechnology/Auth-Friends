import axios from 'axios';

export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const ERROR = 'ERROR';

export const createFriend = (friend) => {
  const url = 'http://localhost:5000/api/friends/create';
  const add = axios.post(url, friend)
    return dispatch => {
      dispatch({ type: ADDING_FRIEND });
      add
        .then((response) => {
          dispatch({ type: FRIEND_ADDED, payload: response.data })
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err })
        })
    }
}

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: GETTING_FRIENDS });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIENDS_RECEIVED, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      });
    }
}