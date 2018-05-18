import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const CREATE_FRIEND = 'CREATE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const SINGLE_FRIEND = 'SINGLE_FRIEND';
export const TOGGLE_UPDATE_FRIEND = 'TOGGLE_UPDATE_FRIEND';

const URL = 'http://localhost:5000/api/friends';

export const fetchFriends = () => {
    const getFriends = axios.get(`${URL}/get`);
    return dispatch => {
      dispatch({ type: FETCHING_FRIENDS }); 
      getFriends
        .then(response => {
            dispatch({ type: FRIENDS_FETCHED, payload: response.data });
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: 'Error Fetching Friends'
            });
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
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
};

export const deleteFriend = id => {
    const deletedFriend = axios.delete(`${URL}/delete`, {
      data: { id }
    });
    return dispatch => {
      dispatch({ type: DELETING_FRIEND });
      deletedFriend
        .then(({ data }) => {
          dispatch({ type: DELETE_FRIEND, payload: data });
          dispatch({ type: SINGLE_FRIEND, payload: {} });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
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