import axios from 'axios';

export const GET_FRIENDS = ' GET_FREINDS';

export const getFriends = () => dispatch => {

  dispatch({ type: GET_FRIENDS })
  axios
    .get('')
    .then(response => {

    })
    .catch(error => {
      
    })

}