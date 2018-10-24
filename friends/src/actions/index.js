import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_ERROR = 'FETCH_ERROR';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DATABASEADD_FRIEND = 'DATABASEADD_FRIEND';

export const fetchData = () => dispatch => {
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_ERROR, payload: err }));
};

export const updateFriend = friend => {
  return {
    type: UPDATE_FRIEND,
    payload: friend
  };
};

export const addFriend = friend => dispatch => {
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(res => dispatch({ type: DATABASEADD_FRIEND, payload: res.data }))
    .catch(err => console.log(err));
};
