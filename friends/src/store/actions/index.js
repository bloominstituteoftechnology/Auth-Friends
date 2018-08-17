import axios from 'axios';

// 1. Fetching
export const FETCHING = 'FETCHING';
export const IS_FETCHED = 'IS_FETCHED';
// 2. Adding 
export const ADDING = 'ADDING';
export const IS_ADDED = 'IS_ADDED';
// 3. Deleting
export const DELETING = 'DELETING';
export const IS_DELETED = 'IS_DELETED';
// 4. Updating
export const UPDATING = 'UPDATING';
export const IS_UPDATED = 'IS_UPDATED';
// 5. Error
export const ERROR = 'ERROR';

export const debugging = () => ({
  type: ERROR,
  error: 'debugging'
})

export const fetchFriend = () => {
  const request = axios.get('http://localhost:5000/api/friends');

  return (dispatch) => {
    dispatch({ type: FETCHING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_FETCHED, friends: data }))
            .catch(error => dispatch({ type: ERROR, error }))
  }
};

export const addFriend = (friend) => {
  const request = axios.post('http://localhost:5000/api/friends', friend);

  return (dispatch) => {
    dispatch({ type: ADDING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_ADDED, friends: data }))
            .catch(error => dispatch({ type: ERROR, error }))
  }
}

export const deleteFriend = (id) => {
  const request = axios.delete(`http://localhost:5000/api/friends/${id}`);

  return (dispatch) => {
    dispatch({ type: DELETING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_DELETED, friends: data }))
            .catch(error => dispatch({ type: ERROR, error }))
  } 
}

export const updateFriend = (id, friend) => {
  const request = axios.put(`http://localhost:5000/api/friends/${id}`, friend);

  return (dispatch) => {
    dispatch({ type: UPDATING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_UPDATED, friends: data }))
            .catch(error => dispatch({ type: ERROR, error }))
  } 
}