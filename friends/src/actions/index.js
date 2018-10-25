
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const ADDING = 'ADDING';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const DELETING = 'DELETING';
export const DELETING_SUCCESS = 'DELETING_SUCCESS';
export const DELETING_FAILURE = 'DELETING_FAILURE';


export const fetchFriends = () => dispatch => {
    // let's do some async stuff! Thanks react-thunk :)
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
          console.log("in action", response);
          dispatch({ type: FETCHING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_FAILURE, payload: error });
      });
  };

  export const addFriend = (friend) => dispatch => {
    // let's do some async stuff! Thanks react-thunk :)
    dispatch({ type: "ADDING" });
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(response => {
          dispatch({ type: ADDING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: ADDING_FAILURE, payload: error });
      });
  };

  export const deleteFriend = (id) => dispatch => {
    // let's do some async stuff! Thanks react-thunk :)
    dispatch({ type: "DELETING" });
    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
          dispatch({ type: DELETING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: DELETING_FAILURE, payload: error });
      });
  };