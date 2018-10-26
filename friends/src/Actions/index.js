import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND'
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND_FAILURE'
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS'
export const DELETE_FRIEND = 'DELETE_FRIEND'
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE'



export const deleteFriend = (id) => dispatch => {
  
  dispatch({ type: DELETE_FRIEND });
  console.log('id...',id)
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: error });
  });  
}

export const addingFriend = (data) => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post('http://localhost:5000/api/friends',data)
    .then(response => {

      dispatch({ type: ADDING_FRIEND_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: ADDING_FRIEND_FAILURE, payload: error });
  });
};

export const fetchFriends = () => dispatch => {

    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {

        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

