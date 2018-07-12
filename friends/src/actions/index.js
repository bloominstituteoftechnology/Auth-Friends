import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const ON_DATA_FETCHED = 'ON_DATA_FETCHED';
export const ON_DATA_ERROR = 'ON_DATA_ERROR';

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_DATA });
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      dispatch({ type: ON_DATA_FETCHED, payload: response.data });
    })
    .catch(e => dispatch({ type: ON_DATA_ERROR, payload: e }));
  };
};