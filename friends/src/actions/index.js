import { get } from "axios"

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
export const FETCHINGFRIENDS = "FETCHINGFRIENDS"
export const FRIENDSFETCHED = "FRIENDSFETCHED"
export const FRIENDSSAVED = "FRIENDSSAVED"
export const SAVINGFRIENDS = "SAVINGFRIENDS"
export const UPDATINGFRIEND = "UPDATINGFRIEND"
export const FRIENDUPDATED = "FRIENDUPDATED"
export const DELETINGFRIEND = "DELETINGFRIEND"
export const FRIENDDELETED = "FRIENDDELETED"
export const ERROR = "ERROR"

export const fetchFriends = () => async dispatch => {
  await dispatch({ type: FETCHINGFRIENDS })
  try {
    const { data } = await get("http://localhost:5000/api/friends")
    await dispatch({ type: FRIENDSFETCHED, payload: data })
  } catch (error) {
    await dispatch({ type: ERROR, payload: "oops" })
  }
}
