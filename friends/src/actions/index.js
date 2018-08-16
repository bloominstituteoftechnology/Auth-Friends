//actions

import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED= 'FETCHED';
export const ERROR = 'ERRROR';
export const ADDFRIEND = 'ADDFRIEND';

export const getFriends = () => {
  return function(dispatch){
    setTimeout(() => {
      dispatch({type: FETCHING, payload: "fetching request"});
      axios.get('http://localhost:5000/api/friends').then(res => {
        dispatch({type: FETCHED, payload: {
          friends: res.data,

        }})
      }).catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: "Error occured"})
      })
    })
}

export const addFriend = (friend) => {
  return {
    type: ADDFRIEND,
    payload: friend,
  };
};
