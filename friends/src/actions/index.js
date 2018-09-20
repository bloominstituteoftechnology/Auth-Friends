import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_ERROR = 'FETCHING_ERROR'
export const FETCHED_DATA = 'FETCHED_DATA'
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE'
export const ADD_FRIEND = 'ADD_FRIEND'

export const fetchingData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA })

  axios
    .get('http://localhost:5000/api/friends')
    .then(res =>
      dispatch({
        type: FETCHED_DATA,
        payload: res.data
      })
    )
    .then(() => 
      dispatch({
        type: FETCHING_COMPLETE
      })
    )
    .catch(err => 
      dispatch({
        type: FETCHING_ERROR,
        payload: err
      })
    )
}

export const createFriend = (newFriend) => (dispatch) => {
  axios
  .post('http://localhost:5000/api/friends', newFriend)
  .then(res => 
    dispatch({
      type: ADD_FRIEND,
      payload: res.data
    })
  )
}