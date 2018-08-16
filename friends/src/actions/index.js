import axios from 'axios';

const FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE';

const ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE= 'DELETE';

const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH });
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
			console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

const addFriend = (e, friend) => dispatch => {
  e.preventDefault();
  dispatch({ type: ADD });
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
			console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

const updateFriend = (e, friend) => dispatch => {
  dispatch({ type: UPDATE });
  axios
    .put(`http://localhost:5000/api/friends/${e.target.id}`, friend)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
			console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

const deleteFriend = e => dispatch => {
  dispatch({ type: DELETE });
  axios
    .delete(`http://localhost:5000/api/friends/${e.target.id}`)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
			console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export { FETCH, FETCH_SUCCESS, FETCH_FAILURE, fetchFriends, addFriend, updateFriend, deleteFriend };
