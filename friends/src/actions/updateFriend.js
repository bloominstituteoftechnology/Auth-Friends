import axios from 'axios';

const updateFriend = (friendInfo) => {
  return dispatch => {
    dispatch({ type: 'UPDATING_FRIEND' });
    axios.put('http://localhost:5000/api/friends/update', friendInfo)
      .then(response => {
        dispatch({ type: 'FRIEND_UPDATED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_UPDATING_FRIEND', payload: error});
      });
  };
};

export default updateFriend;