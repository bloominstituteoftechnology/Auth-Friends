import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';

export const fetchData = url => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const addFriend = (url, friend) => {
  return function(dispatch) {
    dispatch({ type: ADDING });
    axios
      .post(url, friend)
      .then(response => {
        dispatch({ type: ADDED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const deleteFriend = url => {
  return function(dispatch) {
    dispatch({ type: DELETING });
    axios
      .delete(url)
      .then(response => {
        dispatch({ type: DELETED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
