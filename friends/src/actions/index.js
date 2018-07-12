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

export const fetchFriends = () => {
  const request = axios.get(url)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        console.log(res)
        dispatch({ type: GET_FRIENDS, payload: res.data })
        dispatch({ type: FETCHING, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
