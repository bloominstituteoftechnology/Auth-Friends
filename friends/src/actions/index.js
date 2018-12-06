import axios from 'axios';

export const FETCHING = 'FETCHING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING = 'ADDING';
export const UPDATE_FORM = 'UPDATE_FORM';

export const fetchFriends = () => dispatch => {

  dispatch({type: FETCHING});

  axios.get('http://localhost:5000/api/friends/')
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

  dispatch({type: UPDATING});

  axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
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

  dispatch({type: DELETING});

  axios.delete(`http://localhost:5000/api/friends/${friend.id}`)
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

  dispatch({type: ADDING});

  axios.post(`http://localhost:5000/api/friends/`, friend)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FAILURE,
      payload: err
    }));

}

export const setFormToUpdate = friend => {

  return {
    type: UPDATE_FORM,
    payload: friend
  }

}
