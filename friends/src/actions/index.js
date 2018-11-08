import axios from 'axios';
export const SUCCESS = "SUCCESS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const getFriends = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000/api/friends')
      .then (response => {
        console.log(response)
        dispatch({ type: SUCCESS, friends: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: "Failed to retrieve friends from server, ruh-roh..." })
      })
  }
}

export const addFriend = (newFriend) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:5000/api/friends', newFriend)
      .then(response => {
        dispatch({ type: SUCCESS, friends: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: "Failed to add your friend. :( Try again?" })
      })
  }
}

export const deleteFriend = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        dispatch({ type: SUCCESS, friends: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: "Can't get rid of this one" })
      })
  }
}

export const updateFriend = (updatedFriend) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
      .then(response => {
        dispatch({ type: SUCCESS, friends: response.data})
      })
      .catch(err => {
        dispatch({ type: ERROR, error: "Failed to update their info, sowwy" })
      })
  }
}