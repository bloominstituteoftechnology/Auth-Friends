import axios from 'axios';

export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const IS_SAVING = 'IS_SAVING';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR_SAVING_FRIENDS = 'ERROR_SAVING_FRIENDS';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIENDS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
      });
  };
};

export const saveFriend = (values) => {
  return dispatch => {
    dispatch({ type: IS_SAVING });
    axios
      .post('http://localhost:5000/api/friends/create', values)
      .then(({ data }) => {
        dispatch({ type: FRIENDS_SAVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SAVING_FRIENDS, payload: err });
      });
  };
};
