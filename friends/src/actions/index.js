// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';


export const fetchData = () => {
  const getData = axios.get('http://localhost:5000/api/friends/');
  return function(dispatch) {
    dispatch({ type: FETCHING });
    getData
      .then(someData => {
        setTimeout(() => {
          dispatch({ type: FETCHED, payload: someData.data });
        }, 1000);
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};
