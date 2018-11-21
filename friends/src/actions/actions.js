import axios from 'axios'

export const FETCHING = 'FETCHING'

export const SUCCESS = 'SUCCESS'

export const FAILURE = 'FAILURE'

export const ADDING = 'ADDING'

export const handleFriends = () => dispatch => {
 dispatch({type: FETCHING})
 axios
 .get('http://localhost:5000/api/friends')
 .then(response => {
  console.log(response)
  dispatch({type: SUCCESS, 
   payload: response.data,
   fetchingFriends: false,
   receivedFriends: true, 
   error: false 
  })
 })
 .catch(err => {
  console.log(err)
  console.log('Server Error', err)
  dispatch({type: FAILURE, 
   payload: 'Sadly, friends were not found.',
   fetchingFriends: false,
   receivedFriends: false, 
   error: true 
  })
 })
}
