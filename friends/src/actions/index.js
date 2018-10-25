import axios from 'axios';
export const NEW_FRIEND = 'NEW_FRIEND'
export const GETTING_FRIENDS = 'GETTING_FRIENDS'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const newFriend = item => {
  return {
    type: NEW_FRIEND,
    payload: item
  }
}

export const getFriends = () => dispatch => {
  dispatch({type: GETTING_FRIENDS});
  axios
    .get('http://localhost:5000/api/friends')
    // .then((data)=> console.log('from teh server', data))
    .then((response) => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      }, console.log('this is from the server', response))
    })
  .catch(error => {
    dispatch({
      type: FAILURE,
      payload: error
    })
  })
}


