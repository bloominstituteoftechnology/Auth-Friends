import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const POSTING = 'POSTING';
export const SAVED = 'SAVED';

export function fetchFriends() {
  const promise = axios.get(`http://localhost:5000/api/friends`);
  return(dispatch) => {
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

export const createFriends = (friend) => {
  const promise = axios.post(`http://localhost:5000/api/friends`, friend);
  return dispatch => {
    dispatch({ type: POSTING });
    promise
      .then(response => {
	dispatch({type: SAVED, payload: response.data });
      })
      .catch(error => {
	dispatch({ type: ERROR, payload: error });
      });
  };
};

// I modeled this off of what I did with the swapi project.
