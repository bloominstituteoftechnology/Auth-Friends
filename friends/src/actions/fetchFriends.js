import axios from 'axios';
import * as friendsTypes from './actionTypes';

export const fetchFriends = () =>{
  const friends = axios
  .get('http://localhost:5000/api/friends')
  return dispatch =>{
      dispatch({type: friendsTypes.PENDING_FRIENDS});
      friends
      .then(response =>{
          console.log(response)
          dispatch({
              type: friendsTypes.SUCCESS_FRIENDS,
              payload: response.data
          })
      })
      .catch(err =>{
          dispatch({
              type:friendsTypes.ERROR_FRIENDS,
              payload: 'ERROR fetching friends'
          })
      })
  }  
}