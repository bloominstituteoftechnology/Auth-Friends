import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING = "SAVING";
export const SAVED = "SAVED";

export const fetchData = () => {
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

export const saveData = friend => {
  const request = axios.post('http://localhost:5000/api/friends', friend);
  console.log("no, didn't happen");
  return (dispatch) => {
    dispatch({type: SAVING});
    request.then(response => {
      dispatch({type: SAVED, payload: response.data});
    }).catch(err => {
      dispatch({type: ERROR, payload: err});
    })
  }
}
