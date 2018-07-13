import axios from 'axios';

export const getFriends = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_FRIENDS' });
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        dispatch({ type: 'FRIENDS_FETCHED', payload: response.data });
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
      .post(`http://localhost:5000/api/friends`, newFriend)
      .then(response => {
        dispatch({ type: 'FRIENDS_SAVED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getFriend = () => {
  return {

  }
}

export const editFriend = () => {
  return {

  }
}

export const deleteFriend = () => {
  return {

  }
}
