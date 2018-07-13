import axios from 'axios'

const url = `http://localhost:5000/api/friends`
export const FETCHING = 'FETCHING'
export const GET_FRIENDS = 'GET_FRIENDS'
export const ERROR = 'ERROR'

export const fetchFriends = () => {
  const request = axios.get(url)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        dispatch({ type: GET_FRIENDS, payload: res.data })
        dispatch({ type: FETCHING, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const addFriend = (newFriend) => {
  console.log(newFriend)
  const friend = {
    name: newFriend.name,
    age: newFriend.age,
    email: newFriend.email
  }
  const request = axios.post(url, friend)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        dispatch({ type: FETCHING, payload: false })
        dispatch({ type: GET_FRIENDS, payload: res.data })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const deleteFriend = (friend) => {
  const request = axios.delete(`http://localhost:5000/api/friends/${friend}`)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        dispatch({ type: FETCHING, payload: false })
        dispatch({ type: GET_FRIENDS, payload: res.data })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const editFriend = (friendId, state) => {
  console.log('IN EDIT', friendId)
  const realID = state[0]
  console.log(realID)
  const friend = {
    name: friendId.name,
    age: friendId.age,
    email: friendId.email
  }
  const request = axios.put(
    `http://localhost:5000/api/friends/${realID}`,
    friend
  )
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        dispatch({ type: FETCHING, payload: false })
        dispatch({ type: GET_FRIENDS, payload: res.data })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
