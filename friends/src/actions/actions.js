import axios from 'axios'

export const FETCHING = 'FETCHING'

export const SUCCESS = 'SUCCESS'

export const FAILURE = 'FAILURE'


export const handleFriends = () => dispatch => {
 dispatch({type: FETCHING})
 axios
 .get('http://localhost:5000/api/friends')
 .then(response => {
  dispatch({type: SUCCESS, payload: response.data,
   fetchingFriends: false,
   receivedFriends: true, 
   error: false 
  })
 })
 .catch(() => {
  dispatch({type: FAILURE, payload: 'Sadly, friends were not found.',
   fetchingFriends: false,
   receivedFriends: false, 
   error: true 
  })
 })
}


export const addFriend = friendData => dispatch => {
 axios
 .post('http://localhost:5000/api/friends', friendData)
 .then(response => {
  dispatch({type: SUCCESS, payload: response.data})
 })
 .catch(err => {
  dispatch({type: FAILURE, payload: 'Friend not added.'})
 })
}

export const deleteFriend = (id) => dispatch => {
 axios
 .delete(`http://localhost:5000/api/friends/${id}`)
 .then(response => {
  dispatch({type: SUCCESS, payload: response.data})
 })
  .catch(() => {
   dispatch({type: FAILURE, payload: "Friend not deleted."})
  })
 }