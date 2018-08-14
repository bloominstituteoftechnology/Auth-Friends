import axios from 'axios';

export const fetchData = () => {
  const promise = axios.get('http://localhost:5000/api/friends');
  return dispatch => {
    dispatch({type: 'FETCHING_DATA' });
    promise
      .then(response => {
        dispatch({ type: 'DATA_FETCH_SUCCESS', results: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'DATA_FETCH_ERROR' })
      })
  }
}