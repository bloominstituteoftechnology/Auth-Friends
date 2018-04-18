import axios from 'axios'

const FETCH_START = 'fetch-start'
const FETCH_SUCCESS = 'fetch-success'
const FETCH_ERROR = 'fetch-error'

const fetchFriends = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.get('http://localhost:5000/api/friends')
      .then(({ data }) => dispatch({ type: FETCH_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: FETCH_ERROR, payload: error }))
  }
}

export {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  fetchFriends
}