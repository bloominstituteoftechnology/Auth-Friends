import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const fetchData = friends => {
  const request = axios.get('http://localhost:5000/api/friends');
  return (dispatch) => {
    dispatch({type: FETCHING});
    request.then(response => {
      dispatch({type: FETCHED, payload: response.data});
    }).catch(err => {
      dispatch({type:ERROR, payload: err});
    })
  }
}
