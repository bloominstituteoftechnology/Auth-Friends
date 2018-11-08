import axios from 'axios';
 export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const ERROR = 'ERROR';
 export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHED, payload: response.data});
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  }
}
 export const addFriend = (data) => {
  return dispatch => {
    dispatch({ type: SAVING });
    axios
    .post('http://localhost:5000/api/friends', data)
    .then(response => {
      dispatch({ type: SAVED, payload: response.data});
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  }
} 