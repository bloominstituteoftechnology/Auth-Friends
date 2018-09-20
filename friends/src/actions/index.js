import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';

export const isFetch = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:5000/')
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data.results });
      })
      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};
