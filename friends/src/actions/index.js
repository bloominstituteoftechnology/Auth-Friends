import axios from 'axios'
import uuid from 'uuid'

export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const SAVING = 'SAVING'
export const SAVED = 'SAVED'
export const UPDATING = 'UPDATING'
export const UPDATED = 'UPDATED'
export const DELETING = 'DELETING'
export const DELETED = 'DELETED'
export const ERROR = 'ERROR'

export const recordError = error => ({
  type: ERROR,
  error
})

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING })

  axios
    .get('/api/friends')
    .then(res => dispatch({ type: FETCHED, friends: res.data }))
    .catch(err => dispatch(recordError()))
}

export const saveFriend = ({ name, age, email }) => dispatch => {
  dispatch({ type: SAVING })

  axios
    .post('/api/friends', {
      name,
      age,
      email,
      id: uuid()
    })
    .then(res => dispatch({ type: SAVED, friends: res.data }))
    .catch(err => dispatch(recordError()))
}

export const updateFriend = (id, field, value) => dispatch => {
  dispatch({ type: UPDATING })

  axios
    .put(`/api/friends/${id}`, { [field]: this.state.value })
    .then(res => dispatch({ type: UPDATED, friends: res.data }))
    .catch(err => dispatch(recordError()))
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETING })

  axios
    .delete(`/api/friends/${id}`)
    .then(res => dispatch({ type: DELETED, friends: res.data }))
    .catch(err => dispatch(recordError()))
}
