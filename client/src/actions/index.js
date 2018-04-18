import axios from 'axios'

const FETCH_START = 'fetch-start'
const MULTI_FETCH_SUCCESS = 'multi-fetch-success'
const FETCH_ERROR = 'fetch-error'
const SINGLE_FETCH_SUCCESS = 'single-fetch-success'
const UPDATING_FRIEND = 'updating-friend'
const UPDATED_FRIEND = 'updated-friend'

const fetchFriends = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.get('http://localhost:5000/api/friends')
      .then(({ data }) => dispatch({ type: MULTI_FETCH_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }))
  }
}

const fetchFriend = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.get(`http://localhost:5000/api/friends/${id}`)
      .then(({ data }) => {
        dispatch({ type: SINGLE_FETCH_SUCCESS, payload: data })
        dispatch({ type: UPDATING_FRIEND })
      })
      .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }))
  }
}

const createFriend = ({ name, age, email }) => {
  const friend = { name, age, email }
  return (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.post('http://localhost:5000/api/friends', friend)
      .then(({ data }) => dispatch({ type: MULTI_FETCH_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }))
  }
}

const updateFriend = (friend) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
      .then(({ data }) => {
        dispatch({ type: MULTI_FETCH_SUCCESS, payload: data })
        dispatch({ type: UPDATED_FRIEND })
      })
      .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }))
  }
}

export {
  FETCH_START,
  MULTI_FETCH_SUCCESS,
  FETCH_ERROR,
  SINGLE_FETCH_SUCCESS,
  UPDATING_FRIEND,
  UPDATED_FRIEND,
  fetchFriends,
  fetchFriend,
  createFriend,
  updateFriend
}