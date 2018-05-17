import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
  const promise = axios.get(`http://localhost:5000/api/friends`);
  return dispatch => {
    dispatch ({ type: FETCHING });
    promise
       .then(response => {
         dispatch({ type: FETCHED, payload: response.data });
       })
       .catch(err => {
          dispatch({ type: ERROR, payload: error });
       });
    };
};

export const createFriends = data => {
  const promise = axios.post(`http://localhost:5000/api/friends`, data);
  return dispatch => {
    promise
      .then(response => {
	dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
	dispatch({ type: ERROR, payload: error });
      });
  };
};
