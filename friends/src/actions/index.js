import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_ERROR = 'FETCHING_ERROR'
export const FETCHED_DATA = 'FETCHED_DATA'
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE'
export const ADD_FRIEND = 'ADD_FRIEND'
export const UPDATE_FRIEND = 'UPDATE_FRIEND'

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
    .catch(err => console.log(err))
}

export const createFriend = (newFriend) => (dispatch) => {
  axios.post('http://localhost:5000/api/friends', newFriend)
    .then(res => 
      dispatch({
        type: ADD_FRIEND,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

export const updateFriend = (updatedFriend) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
    .then(res => 
      dispatch({
        type: UPDATE_FRIEND,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
