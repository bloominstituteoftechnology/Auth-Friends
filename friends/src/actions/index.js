import axios from 'axios';

export const getFriends = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_FRIENDS' });
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        dispatch({ type: 'FRIENDS_FETCHED', payload: response.data.results });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const submitFriend = (newFriend) => {
  return dispatch => {
    dispatch({ type: 'SAVING_FRIENDS' });
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => {
        dispatch({ type: 'FRIENDS_SAVED', payload: response.data.results });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
