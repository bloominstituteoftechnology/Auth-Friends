import axios from 'axios';

// Action Type Declarations
export const FINDING = 'FINDING';
export const LOADED = 'LOADED';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

export const getFriends = () => {
  const request = axios.get('http://localhost:5000/api/friends/');
  return (dispatch) => {
    dispatch({ type: LOADING });
    request
      .then(data => {
        console.log("getFriends .then data",data);
        dispatch({
          type: LOADED,
          payload: data.data,
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      });
  }
};

export const postFriend = (friendObj) => {
  const request = axios.post('http://localhost:5000/api/friends',friendObj);
  return (dispatch) => {
    // dispatch({ type: LOADING });
    request
      .then(data => dispatch({
        type: LOADED,
        payload: data.data,
      }))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      });
  }
};

export const putFriend = (id, friendObj) => {
  const request = axios.put(`http://localhost:5000/api/friends/${id}`,friendObj);
  return (dispatch) => {
    // dispatch({ type: LOADING });
    request
      .then(data => dispatch({
        type: LOADED,
        payload: data.data,
      }))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      });
  }
};

export const deleteFriend = (id) => {
  const request = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return (dispatch) => {
    // dispatch({ type: LOADING });
    request
      .then(data => dispatch({
        type: LOADED,
        payload: data.data,
      }))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      });
  }
}