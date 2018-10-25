import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

// export const heresCharacters = () => ({
//   type: FETCHING_CHARACTERS_SUCCESS,
//   payload: [{ name: "Kirk, Captain" }]
// });

export const getFriends = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
};
