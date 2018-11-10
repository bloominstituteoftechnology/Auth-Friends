import axios from 'axios'
export const GET_FRIENDS = "GET_AVENGERS"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

export const getFriends = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000/api/friends')
      .then( response => {
        dispatch({type: GET_FRIENDS, friends: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Are you sure you have friends?"})
      })
  }
}

// POST
export const createFriend = (newFriend) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:5000/api/friends', newFriend)
      .then( response => {
        dispatch({type: GET_FRIENDS, friends: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Trouble making friends"})
      })
  }
} 
// DELETE

export const deleteFriend = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:5000/api/friends/${id}`)
      .then( response => {
        dispatch({ type: GET_FRIENDS, friends: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Trouble deleting friend. Possibly a stalker."})
      })

  }
}

// PUT
export const updateFriend = (updatedFriend) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
      .then( response => {
        dispatch({ type: GET_FRIENDS, friends: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "New phone. Who dis?"})
      } )
  }
}