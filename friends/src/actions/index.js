import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const ERROR = 'ERROR';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/api/friends');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    promise
      .then(({ data }) => {
        dispatch({ type: GET_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
}

export const addFriend = friend => {
  return dispatch => {
    dispatch({ type: SAVING_FRIENDS });
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then((res) => {
        dispatch({ type: FRIENDS_SAVED, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  }
}
