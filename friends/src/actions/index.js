import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

// export const POST_FRIEND = 'POST_FRIEND';
// export const POST_FRIEND_SUCCESS = 'POST_FRIEND_SUCCESS';
// export const POST_FRIEND_FAILURE = 'POST_FRIEND_FAILURE';
//
// export const PUT_FRIEND = 'PUT_FRIEND';
// export const PUT_FRIEND_SUCCESS = 'PUT_FRIEND_SUCCESS';
// export const PUT_FRIEND_FAILURE = 'PUT_FRIEND_FAILURE';
//
// export const DELETE_FRIEND = 'DELETE_FRIEND';
// export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
// export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  axios
    .get(`http://localhost:5000/api/friends`)
    .then(response => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error });
    })
}

// export const addFriend = () => dispatch => {
//   dispatch({ type: POST_FRIEND });
//   axios
//     .post()
// }
//
// export const editFriend= () => dispatch => {
//   dispatch({ type: PUT_FRIEND });
//   axios
//     .put()
// }
//
// export const deleteFriend = () => dispatch => {
//   dispatch({ type: DELETE_FRIEND });
//   axios
//     .delete()
// }
