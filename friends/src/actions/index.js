import axios from 'axios';
export const FRIENDS_FETCHING = 'FRIENDS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVING = 'FRIENDS_SAVING';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR_SAVING = 'ERROR_SAVING';
export const ERROR_FETCHING = 'ERROR_FETCHING';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: FRIENDS_FETCHING });
    friends
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: FRIENDS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err });
      });
  };
};

export const addFriend = (data) => {
  console.log('run');
  // const monkey = axios.post('http://localhost:5000/api/friends/create', data);
  return dispatch => {
    dispatch({ type: FRIENDS_SAVING });
    axios.post('http://localhost:5000/api/friends/create', data)    
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: FRIENDS_SAVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SAVING, payload: err });
      });
  };
};
