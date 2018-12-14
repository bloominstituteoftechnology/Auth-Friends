import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCH });
  axios
    .get(`http://localhost:5000/api/friends`)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err});
    });
};

export const addFriend = friend => {
  const newFriend = axios.post('http://localhost:5000/api/friends', friend);
  return dispatch => {
    dispatch({ type: ADD_FRIEND });
    newFriend
      .then(({ data }) => {
        dispatch({ type: ADD_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ADD_ERROR, payload: err });
      });
  };
};

// export const addFriend = friend => {
//     return dispatch => {
//       dispatch({ type: ADD_FRIEND });
//   axios
//     .post('http://localhost:5000/api/friends', friend)
//     .then(response => {
//       console.log(response)
//       dispatch({ type: ADD_SUCCESS, payload: response.data})
//     })
//     .catch(err => dispatch({ type: ADD_ERROR, payload: err}))}
// };
