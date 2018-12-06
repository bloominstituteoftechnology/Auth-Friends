import axios from 'axios';

export const GET_FRIENDS_LOADING = 'GET_FRIENDS_LOADING';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

const urlLinks = {
  server: 'http://localhost:5000',
  home: '/'
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_LOADING });
  axios
    .get(`${urlLinks.server}${urlLinks.home}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: GET_FRIENDS_FAILURE, payload: err }));
};
