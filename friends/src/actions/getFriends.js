import axios from 'axios'
import { FETCHINGFRIENDS, FRIENDSFETCHED, ERROR } from './index'

export const getFriends = friend => dispatch => {
  dispatch({ type: FETCHINGFRIENDS })

  axios
    .get('http://localhost:5000/api/friends')
    .then( ({data}) => {
      console.log('data', data)
      dispatch({ type: FRIENDSFETCHED })
    })
    .catch(err => {
      console.log('err', err)
      dispatch({ type: ERROR})
    })
}