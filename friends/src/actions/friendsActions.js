import axios from 'axios';

export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const FETCHED_FRIEND = 'FETCHED_FRIEND';
export const ERROR_FETCHING_FRIEND = 'ERROR_FETCHING_FRIEND';

export const CREATING_FRIEND = 'CREATING_FRIEND';
export const FRIEND_CREATED = 'FRIEND_CREATED';
export const ERROR_CREATING_FRIEND = 'ERROR_CREATING_FRIEND';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIEND });

  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHED_FRIEND, friends: response.data });
    })
    .catch(error => {
      dispatch({
        type: ERROR_FETCHING_FRIEND,
        error: 'Error fetching friends'
      });
    });
};

export const postFriends = data => dispatch => {
  dispatch({ type: CREATING_FRIEND });

  axios
    .post('http://localhost:5000/api/friends', data)
    .then(response => {
      dispatch({ type: FRIEND_CREATED, friends: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR_CREATING_FRIEND, error: 'Error creating friend' });
    });
};
