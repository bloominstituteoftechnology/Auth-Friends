import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED'
export const FRIENDS_SAVED = 'FRIENDS_SAVED'
export const SAVING_FRIENDS = 'SAVING_FRIENDS'
export const UPDATING_FRIEND = 'UPDATING_FRIEND'
export const FRIEND_UPDATED = 'FRIEND_UPDATED'
export const DELETING_FRIEND = 'DELETING_FRIEND'
export const FRIEND_DELETED = 'FRIEND_DELETED'
export const FRIENDS = 'FRIENDS'
export const ERROR = 'ERROR'

export const fetchFriends = () => {
  return dispatch => {
    dispatch({type: FETCHING_FRIENDS})
    axios
      .get('http://localhost:5000/api/friends/')
      .then(response => { dispatch({type: FRIENDS_FETCHED, payload: response.data}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const saveFriend = (friend) => {
  return dispatch => {
    dispatch({type: SAVING_FRIENDS})
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(response => {dispatch({type: FRIENDS_SAVED,}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const deleteFriend = (id) => {
  // console.log('delFriend action fired');
  // return dispatch => {
  //   dispatch({type: DELETING_FRIEND})
  //   console.log('delFriend dispatch fired');
    axios
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(response => { console.log(response);
        // dispatch({type: FRIEND_DELETED, payload: response.data})
      })
      .catch(error => {
        console.log('error');
        // dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
