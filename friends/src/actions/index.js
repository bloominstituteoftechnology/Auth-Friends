import axios from 'axios';
//This is where you export all the actions you just defined, over to the reducer
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const INITIALIZE_FRIEND_ADD = 'INITIALIZE_FRIEND_ADD';
export const COMPLETE_FRIEND_ADD = 'COMPLETE_FRIEND_ADD';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';
export const DISPLAY_UPDATE_FORM = 'DISPLAY_UPDATE_FORM';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATED_FRIEND = 'UPDATED_FRIEND';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    //Action that indicates data is being fetched
    dispatch({ type: FETCHING_DATA });
    axios
      .get('http://localhost:5000/api/friends')
      .then((response) => {
        //Action that indicates data has been fetched, and includes with it the response payload
        dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addFriend = (newFriend) => {
  return (dispatch) => {
    //Again, action to indicate an API call is about to be made, this time for a POST
    dispatch({ type: INITIALIZE_FRIEND_ADD });
    //Below, you're making the POST call to the API, with newFriend as the friend object youre adding. That newFriend object needs to follow the API framework for how objects look
    axios 
      .post('http://localhost:5000/api/friends', newFriend)
      .then((response) => {
        //When POST is successful, the dispatch then sends an action (COMPLETE_FRIEND_ADD, and associated data, which in this case is the payload with response.data that includes the new friend added)
        dispatch({ type: COMPLETE_FRIEND_ADD, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_FRIEND_ERROR });
      });
  };
};

export const updateForm = (friend) => {
  return (dispatch) => {
    //Action indicates that it wants the update form displayed, and the associated data here is the friend obect you're about to update
    dispatch({ type: DISPLAY_UPDATE_FORM, payload: friend });
  };
};

export const updateFriend = (updatedFriend) => {
  return (dispatch) => {
    dispatch({ type: UPDATING_FRIEND });
    axios.put('http://localhost:5000/api/friends');
  };
};