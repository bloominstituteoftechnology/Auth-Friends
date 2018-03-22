import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const GET_FRIENDS_ERROR = 'GET_FRIENDS_ERROR';

export const POSTING = 'POSTING';
export const POST_FRIEND_ERROR = 'POST_FRIEND_ERROR';
export const POSTED = 'POSTED';

export const get_friends = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_ERROR, errorMessage: 'Error fetching friends' });
    });
};

export const add_new_friend = (newFriend) => dispatch => {
  dispatch({ type: POSTING });

  axios
    .post('http://localhost:5000/api/friends', newFriend)
    .then(response => {
      dispatch({ type: POSTED, newFriend });
    })
    .catch(err => {
      dispatch({ type: POST_FRIEND_ERROR, errorMessage: 'Error posting new friend' });
    });
};