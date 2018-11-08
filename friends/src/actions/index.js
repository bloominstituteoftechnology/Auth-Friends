import axios from 'axios';
export const LOADING  = 'LOADING';
export const UPDATING = 'UPDATING';
export const ERROR    = 'ERROR';

export const getFriends = () => {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('http://localhost:5000/api/friends')
      .then( response => {
        dispatch({ type: UPDATING, friends: response.data })
      })
      .catch( err => {
        dispatch({ type: ERROR, errorMsg: "Cannot get friends. Try again."})
      });
  };
};