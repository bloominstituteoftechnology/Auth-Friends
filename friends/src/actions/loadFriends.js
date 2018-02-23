import axios from 'axios';

const loadFriends = () => {
  console.log('loading again');
  return dispatch => {
    dispatch({ type: 'IS_LOADING_FRIENDS' });
    axios.get('http://localhost:5000/api/friends/get')
      .then(response => {
        dispatch({ type: 'FRIENDS_LOADED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_LOADING_FRIENDS', payload: error });
      });
  };
};

export default loadFriends;