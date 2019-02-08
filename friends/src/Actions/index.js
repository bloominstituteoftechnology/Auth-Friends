import Axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FALURE = 'FALURE';

export const ADDED = 'ADDED';

export function getFriends() {
  return dispatch => {
    dispatch({ type: LOADING})

    Axios.get('http://localhost:5000/api/friends')
    .then(response => {
      console.log("This is the response", response.data)
      dispatch({ type: SUCCESS, gotFriends: response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: FALURE})
    })
  }
}

export function addFriend(newFriend) {
  return dispatch => {
    dispatch({ type: LOADING})

    Axios.post('http://localhost:5000/api/friends', newFriend)
    .then(response => {
      console.log("This is the post response", response.data)
      dispatch({ type: ADDED, addedFriend: response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: FALURE})
    })
  }
}