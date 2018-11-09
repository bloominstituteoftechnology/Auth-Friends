import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const POST_FRIEND = 'POST_FRIEND';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetchFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: SUCCESS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: POST_FRIEND });
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: SUCCESS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};
