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
       .catch(error => {
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
      .catch(error => {
	dispatch({ type: ERROR, payload: error });
      });
  };
};

// This is still very much a work in progress. I'm modeling this off of what I did with the swapi project for now and will probably need to edit this later.
