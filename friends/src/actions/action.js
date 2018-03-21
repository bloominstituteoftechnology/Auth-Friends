import axios from 'axios';
export const ADDING_FRIEND = 'ADDING_FRIEND';

export const addFriend = friend => {
  const newFriend = axios.post('http://localhost:5000/api/friends/create', friend);
  return dispatch => {
      dispatch({ type: ADDING_FRIEND });
      newFriend
          .then(({ data }) => {
              dispatch({ type: FRIEND_ADDED, payload: data });
          })
          .catch(err => {
              dispatch({ type: ERROR, payload: err });
          });  
  };
};