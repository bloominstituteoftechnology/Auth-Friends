import axios from 'axios';
import  {REQUESTTOADD,  ADDINGFRIEND, NOTADDED } from './types';
import {getFriends} from './index'

const URL = 'http://localhost:5000';

export const addFriend = (friend) => {
  return function(dispatch){
    dispatch({type: REQUESTTOADD,
    payload: 'requesting to add friend',})
    axios.post(`http://localhost:5000/api/friends`, {
      name: friend.inputName,
      age: friend.inputAge,
      email: friend.inputEmail
    }).then(res => {
      dispatch({type: ADDINGFRIEND, payload: {
        status: 'sucessfully added friend',
        friends: res.data
      }});
      dispatch(getFriends());
    }).catch(function(err){
        dispatch({type: NOTADDED, payload: 'Friend not added, try again'})
      })
  }
};
