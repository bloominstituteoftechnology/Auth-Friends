import axios from 'axios';

export const GET_FRIENDS = ' GET_FREINDS';

export const getFriends = () => dispatch => {

  dispatch({ type: GET_FRIENDS })
  axios
    .get('/api/friends')
    .then(response => {

    })
    .catch(error => {

    })

}