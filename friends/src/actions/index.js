import axios from 'axios'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const HANDLE_CLICK = 'HANDLE_CLICK';
export const ADD_FRIEND = 'ADD__FRIEND';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';


export const fetchFriends = (friend) => dispatch => {
  dispatch({ type: FETCHING_FRIENDS  });
  axios
    .get(`http://localhost:5000/api/friends/`, friend)
    .then(response => {
      console.log('response= ', response);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data 
      });
    })
    .catch(error => {
      console.log('error= ', error);
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

export const addFriend = (friend) => dispatch => {
  console.log('newfriend', friend)
  dispatch({ type: HANDLE_CLICK });
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response =>{
      console.log('add_friend response =', response);
      dispatch({ type: ADD_FRIEND, payload: response.data })      
    })
    .catch(error => {
      console.log('the error is ', error)
      dispatch({ type: ADD_FRIEND_ERROR, payload: error });
    });
}
