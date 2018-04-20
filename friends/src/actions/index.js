import { get, post } from 'axios'

// fetchingFriends: false,
// friendsFetched: false,
// friendsSaved: false,
// savingFriends: false,
// updatingFriend: false,
// friendUpdated: false,
// deletingFriend: false,
// friendDeleted: false,
// friends: [],
// error: null
export const FETCHINGFRIENDS = 'FETCHINGFRIENDS'
export const FRIENDSFETCHED = 'FRIENDSFETCHED'
export const UPDATINGFRIEND = 'UPDATINGFRIEND'
export const FRIENDUPDATED = 'FRIENDUPDATED'
export const DELETINGFRIEND = 'DELETINGFRIEND'
export const FRIENDDELETED = 'FRIENDDELETED'
export const ERROR = 'ERROR'

const ApiUrl = 'http://localhost:5000/api/friends'

export const fetchFriends = () => async dispatch => {
  await dispatch({ type: FETCHINGFRIENDS })
  try {
    const { data } = await get(ApiUrl)
    await dispatch({ type: FRIENDSFETCHED, payload: data })
  } catch (error) {
    await dispatch({ type: ERROR, payload: 'oops' })
  }
}

export const postFriend = friend => async dispatch => {
  await dispatch({ type: UPDATINGFRIEND })
  try {
    const { data: updatedFriends } = await post(ApiUrl, friend)
    await dispatch({ type: FRIENDUPDATED, payload: updatedFriends })
  } catch (error) {
    await dispatch({ type: ERROR, payload: 'failed to update friend' })
  }
}
