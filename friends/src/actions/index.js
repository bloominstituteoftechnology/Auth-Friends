import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const POST_FRIEND = 'POST_FRIEND';
export const POST_FRIEND_SUCCESS = 'POST_FRIEND_SUCCESS';
export const POST_FRIEND_FAILURE = 'POST_FRIEND_FAILURE';

export const PUT_FRIEND = 'PUT_FRIEND';
export const PUT_FRIEND_SUCCESS = 'PUT_FRIEND_SUCCESS';
export const PUT_FRIEND_FAILURE = 'PUT_FRIEND_FAILURE';

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const FETCH_FRIEND_ID = 'FETCH_FRIEND_ID';
export const FETCH_FRIEND_ID_SUCCESS = 'FETCH_FRIEND_ID_SUCCESS';
export const FETCH_FRIEND_ID_FAILURE = 'FETCH_FRIEND_ID_FAILURE';

const url = `http://localhost:5000/api/friends`;

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  axios
    .get(url)
    .then(response => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error });
    })
}

export const addFriend = friend => dispatch => {
  dispatch({ type: POST_FRIEND });
  axios
    .post(url, friend)
    .then(response => {
      dispatch({ type: POST_FRIEND_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: POST_FRIEND_FAILURE, payload: error });
    })
}

export const editFriend = friend => dispatch => {
  dispatch({ type: PUT_FRIEND });
  axios
    .put(`${url}/${friend.id}`, friend)
    .then(response => {
      dispatch({ type: PUT_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: PUT_FRIEND_FAILURE, payload: error});
    })
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`${url}/${id}`)
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: error });
    })
}

export const fetchFriendById = id => dispatch => {
  console.log('fetching', id);
  dispatch({ type: FETCH_FRIEND_ID })
  axios
    .get(`${url}/${id}`)
    .then(response => {
      dispatch({ type: FETCH_FRIEND_ID_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_FRIEND_ID_FAILURE, payload: error });
    })
}
