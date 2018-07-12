import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchData = url => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(url)
      .then(response => {
        console.log('response data', response.data);
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
