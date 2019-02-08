import Axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FALURE = 'FALURE';

export const ADDED = 'ADDED';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE'

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

export function updateFriend(updated, id) {
  return dispatch => {
    dispatch({ type: LOADING})

    Axios.put(`http://localhost:5000/api/friends/${id}`, updated)
    .then(response => {
      console.log(response)
      dispatch({ type: UPDATE, updatedFriend: response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: FALURE})
    })
  }
}

export function removeFriend(id) {
  return dispatch => {
    dispatch({ type: LOADING})

    Axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log(response)
      dispatch({ type: REMOVE, updated: response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: FALURE})
    })
  }
}
