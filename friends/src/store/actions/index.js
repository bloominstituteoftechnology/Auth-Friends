import axios from 'axios';

export const FRIEND_FETCHING = 'FRIEND_FETCHING';
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS';
export const FRIEND_FAILURE = 'FRIEND_FAILURE';

export const ADD_FRIEND_FETCHING = 'ADD_FRIEND_FETCHING';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const DELETE_FRIEND_FETCHING = 'DELETE_FRIEND_FETCHING';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILSURE';


export const getFriends = () => dispatch => {
    dispatch({ type: FRIEND_FETCHING });
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response);
            dispatch({ type: FRIEND_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: FRIEND_FAILURE, payload: err }));
};

export const addNewFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_FETCHING });
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(response => {
        console.log(response);
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
  };

  export const deleteFriend = id => dispatch => {
      dispatch({ type: DELETE_FRIEND_FETCHING });
      axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            console.log(response);
            dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
  };