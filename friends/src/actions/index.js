import axios from 'axios';
export const FRIENDS_FETCHING = 'FRIENDS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVING = 'FRIENDS_SAVING';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR_FETCHING = 'ERROR_FETCHING';

export const getDogs = () => {
  const friends = axios.get('http://localhost:5000');
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