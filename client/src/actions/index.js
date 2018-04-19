import axios from 'axios'

// action types
const FETCH_START = 'fetch-start'
const MULTI_FETCH_SUCCESS = 'multi-fetch-success'
const FETCH_ERROR = 'fetch-error'
const SINGLE_FETCH_SUCCESS = 'single-fetch-success'
const UPDATING_FRIEND = 'updating-friend'
const UPDATED_FRIEND = 'updated-friend'

// internal actions dispatchers
const fetchStart = () => ({ type: FETCH_START })
const multiFetchSuccess = (payload) => ({ type: MULTI_FETCH_SUCCESS, payload })
const singleFetchSuccess = (payload) => ({ type: SINGLE_FETCH_SUCCESS, payload })
const updatingFriend = () => ({ type: UPDATING_FRIEND })
const updatedFriend = () => ({ type: UPDATED_FRIEND })
const fetchError = (payload) => ({ type: FETCH_ERROR, payload })

// exposed action dispatchers
const fetchFriends = () => {
  return (dispatch) => {
    dispatch(fetchStart())
    axios.get('http://localhost:5000/api/friends')
      .then(({ data }) => dispatch(multiFetchSuccess(data)))
      .catch((error) => dispatch(fetchError(error)))
  }
}

const fetchFriend = (id) => {
  return (dispatch) => {
    dispatch(fetchStart())
    axios.get(`http://localhost:5000/api/friends/${id}`)
      .then(({ data }) => {
        dispatch(singleFetchSuccess(data))
        dispatch(updatingFriend())
      })
      .catch((error) => dispatch(fetchError(error)))
  }
}

const createFriend = ({ name, age, email }) => {
  const friend = { name, age, email }
  return (dispatch) => {
    dispatch(fetchStart())
    axios.post('http://localhost:5000/api/friends', friend)
      .then(({ data }) => dispatch(multiFetchSuccess(data)))
      .catch((error) => dispatch(fetchError(error)))
  }
}

const updateFriend = (friend) => {
  return (dispatch) => {
    dispatch(fetchStart())
    axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
      .then(({ data }) => {
        dispatch(multiFetchSuccess(data))
        dispatch(updatedFriend())
      })
      .catch((error) => dispatch(fetchError(error)))
  }
}

const deleteFriend = (id) => {
  return (dispatch) => {
    dispatch(fetchStart())
    axios.delete(`http://localhost:5000/api/friends/${id}`)
      .then(({ data }) => dispatch(multiFetchSuccess(data)))
      .catch((error) => dispatch(fetchError(error)))
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
  updateFriend,
  deleteFriend
}