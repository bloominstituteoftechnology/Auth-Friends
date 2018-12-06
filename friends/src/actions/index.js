import axios from 'axios';

export const FETCHING = 'FETCHING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchFriends = () => dispatch => {

  axios.get('http://localhost:5000')
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FAILURE,
      payload: err
    }));

}

export const updateFriend = friend => dispatch => {

  axios.put(`http://localhost:5000/${newFriend.id}`, newFriend)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FAILURE,
      payload: err
    }));

}

export const deleteFriend = friend => dispatch => {

  axios.delete(`http://localhost:5000/${friend.id}`)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FAILURE,
      payload: err
    }));

}

export const addFriend = friend => dispatch => {

  axios.post(`http://localhost:5000/`, friend)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FAILURE,
      payload: err
    }));

}
