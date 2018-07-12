import axios from 'axios'
import NewFriend from '../containers/NewFriend'

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
export const POST_FRIEND = 'POST_FRIEND'
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
  const request = axios.post(url, {
    name: newFriend.name,
    age: newFriend.age,
    email: newFriend.email
  })
  return (dispatch) => {
    dispatch({ type: POSTING_FRIEND, payload: true })
    request
      .then((res) => {
        dispatch({ type: POST_FRIEND, payload: res.data })
        dispatch({ type: POSTING_FRIEND, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
