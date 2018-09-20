import axios from "axios";

export const getFriends = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_FRIENDS" });
    axios.get(`http://localhost:5000/api/friends`).then(response => {
        dispatch({ type: "FRIENDS_FETCHED", payload: response.data });
      }).catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

export const addFriend = newFriend => {
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

export const getFriend = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_FRIEND' });
    axios
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        dispatch({ type: 'FRIEND_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const deleteFriend = id => {
  const deletedFriend = axios.delete(`http://localhost:5000/api/friends/${id}`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: 'DELETING_FRIEND' });
    deletedFriend
      .then(({ data }) => {
        dispatch({ type: 'DELETE_FRIEND', payload: data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', payload: err });
      });
  };
};

