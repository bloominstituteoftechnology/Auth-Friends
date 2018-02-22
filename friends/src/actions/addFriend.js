import axios from 'axios';

const addFriend = (friendInfo) => {
  return dispatch => {
    dispatch({ type: 'ADDING_FRIEND' });
    axios.post('http://localhost:5000/api/friends/create', friendInfo)
      .then(response => {
        dispatch({ type: 'FRIEND_ADDED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_ADDING_FRIEND', payload: error});
      });
  };
};

export default addFriend;