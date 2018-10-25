import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POSTING_FRIEND_SUCCESS = 'POSTING_FRIEND_SUCCESS';
export const POSTING_FRIEND_FAILURE = 'POSTING_FRIEND_FAILURE';

export const fetchFriends = () => dispatch => {
  console.log('inside fetchFriends');
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      console.log(response);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error })
    });
};

export const postFriend = (newFriend) => dispatch => {
  console.log('inside postFriend');
  dispatch({ type: POSTING_FRIEND });
  axios
    .post('http://localhost:5000/api/friends', newFriend)
    .then(response => {
      console.log(response);
      dispatch({ type: POSTING_FRIEND_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: POSTING_FRIEND_FAILURE, payload: error })
    });
};