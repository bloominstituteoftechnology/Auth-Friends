import axios from 'axios';

const removeFriend = (index) => {
  return dispatch => {
    dispatch({ type: 'REMOVING_FRIEND' });
    axios.delete('http://localhost:5000/api/friends/delete', {data: { index }} )
      .then(response => {
        dispatch({ type: 'FRIEND_REMOVED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_REMOVING_FRIEND', payload: error});
      });
  };
};

export default removeFriend;