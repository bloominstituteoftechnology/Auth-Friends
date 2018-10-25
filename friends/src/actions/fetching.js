import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const fetchFRIENDS = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('https://dog.ceo/api/breed/husky/images')
    .then(response => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data.message });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};