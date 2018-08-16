import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/api/friends');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    promise
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: GET_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
}
