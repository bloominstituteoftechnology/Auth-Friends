import axios from 'axios';

// Action Type Declarations
export const FINDING = 'FINDING';
export const FOUND = 'FOUND';
export const ERROR = 'ERROR';

export const getFriends = () => {
  const request = axios.get('http://localhost:5000/api/friends/');
  return (dispatch) => {
    dispatch({ type: FINDING });
    request
      .then(data => {
        console.log("getFriends .then data",data);
        dispatch({
          type: FOUND,
          payload: data.data,
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      });
  }
}

export const postFriend = () => {
  const request = axios.post('http://localhost:5000/api/friends');
  // return (dispatch) => {
  //   dispatch({ type: })
  // }
}