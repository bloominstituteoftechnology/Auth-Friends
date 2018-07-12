import axios from 'axios'

//   friendsSaved: false,
//   savingFriends: false,
//   updatingFriend: false,
//   friendUpdated: false,
//   deletingFriend: false,
//   friendDeleted: false,
//   friends: [],
//   error: null
const url = `http://localhost:5000/api/friends`
export const FETCHING = 'FETCHING'
export const GET_FRIENDS = 'GET_FRIENDS'
export const ERROR = 'ERROR'
export const POSTED_FRIEND = 'POSTED_FRIEND'
export const POSTING_FRIEND = 'POSTING_FRIEND'

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
    dispatch({ type: POSTING_FRIEND, payload: true })
    request
      .then((res) => {
        dispatch({ type: POSTING_FRIEND, payload: false })
        dispatch({ type: GET_FRIENDS, payload: res.data })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
