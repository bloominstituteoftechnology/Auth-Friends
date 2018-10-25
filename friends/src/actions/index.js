import axios from 'axios'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const HANDLE_CLICK = 'HANDLE_CLICK';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_ERROR = 'DELETE_FRIEND_ERROR';


export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS  });
  axios
    .get(`http://localhost:5000/api/friends/`)
    .then(response => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data 
      });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

export const addFriend = (friend) => dispatch => {
  dispatch({ type: HANDLE_CLICK });
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response =>{
      dispatch({ type: ADD_FRIEND, payload: response.data })      
    })
    .catch(error => {
      dispatch({ type: ADD_FRIEND_ERROR, payload: error });
    });
}

export const deleteFriend = id => dispatch => {
  console.log(id);
  dispatch({type: DELETING_FRIEND});
  axios
    .post(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log('deleting friend ', response);
      dispatch({ type: DELETE_FRIEND, payload: response.data })
    })
    .catch(error => {
      console.log('deleting friend error is', error)
    })
}