import axios from 'axios'
export const GET_FRIENDS = "GET_FRIENDS"
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
        dispatch({type: ERROR, errorMessage: "Trouble Retreiving Friends, please try again!"})
      })
  }
}

// POST
export const createFriend = (newFriends) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:5000/api/friends', newFriends)
      .then( response => {
        dispatch({type: GET_FRIENDS, friends: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Trouble creating new Friend"})
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
        dispatch({type: ERROR, errorMessage: "TROUBLE deleting Friend, please try again"})
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
        dispatch({type: ERROR, errorMessage: "Trouble updating Friend"})
      } )
  }
}
