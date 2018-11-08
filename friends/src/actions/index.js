import axios from 'axios';
export const LOADING  = 'LOADING';
export const UPDATING = 'UPDATING';
export const ERROR    = 'ERROR';

// GET data from API to populate store:
export const getFriends = () => {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('http://localhost:5000/api/friends')
      .then( (response) => {
        dispatch({ type: UPDATING, friends: response.data })
      })
      .catch( (error) => {
        dispatch({ type: ERROR, errorMsg: "Cannot get friends. Try again."})
      });
  };
};

// POST needed to add a new friend:
export const addFriend = (friend) => {
  return (dispatch) => {
    dispatch( {type: LOADING })
    axios.post('http://localhost:5000/api/friends', friend)
      .then( (response) => {
        dispatch( {type: UPDATING, friends: response.data} )
      })
      .catch( (error) => {
        dispatch( {type: ERROR, errorMsg: "Error adding new friend."} )
      });
  };
};