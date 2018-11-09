import axios from 'axios'
export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const FRIENDS_FETCHED = "FRIENDS_FETCHED"
export const FRIENDS_SAVED = "FRIENDS_SAVED"
export const UPDATING_FRIEND = "UPDATING_FRIEND"
export const FRIEND_UPDATED = "FRIEND_UPDATED"
export const DELETING_FRIEND = "DELETING_FRIEND"
export const FRIEND_DELETED = "FRIEND_DELETED"
export const FRIENDS = "FRIENDS"
export const ERROR = "ERROR"
    
    //GeT
export const fetchFriends = () => {
    return (dispatch) => {
      dispatch({type:FETCHING_FRIENDS})
    axios.get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({type:FRIENDS_FETCHED})
    })  
    .catch(err => {
        dispatch({type:ERROR, errorMessage: "Cannot get friends"})
    })
    }
}
    //PoST
export const createFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: UPDATING_FRIEND})
        axios.post('http://localhost:5000/api/friends', newFriend)
        .then(response => {
            dispatch({type: FRIEND_UPDATED})
        })
        .catch(err => {
            dispatch({type: ERROR, errorMessage: "Could not create new friend"})
        })
    }
}