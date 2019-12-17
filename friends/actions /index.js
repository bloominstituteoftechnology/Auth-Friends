import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_FRIENDS = 'GET_FRIENDS';
export const Fetching_FRIENDS = 'Fetching_FRIENDS';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const CREATE_FRIEND = 'CREATE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const SINGLE_FRIEND = 'SINGLE_FRIEND';
export const TOGGLE_UPDATE_FRIEND = 'TOGGLE_UPDATE_FRIEND';

const URL = 'http://localhost:5000/api/friends';

export const getFriends = () => {
  const friends = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: GETTING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: GET_FRIENDS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createFriend = friend => {
  const newFriend = axios.post(`${URL}/create`, friend);
  return dispatch => {
    dispatch({ type: CREATING_FRIEND });
    newFriend
      .then(({ data }) => {
        dispatch({ type: CREATE_FRIEND, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};


export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_FRIEND
  };
};

export const updateSingleFriend = friend => {
  return {
    type: SINGLE_FRIEND,
    payload: friend
  };
};