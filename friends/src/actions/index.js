//actions

import axios from 'axios';


export const FETCHING = 'FETCHING';
export const FETCHED= 'FETCHED';
export const ERROR = 'ERRROR';

export const getFriends = () => {
  return function(dispatch){
    setTimeout(() => {
      dispatch({type: FETCHING, payload: "fetching request"});
      axios.get('http://localhost:5000/api/friends').then(res => {
        dispatch({type: FETCHED, payload: {
          friends: res.data,
          status: "Fetch complete"
        }})
      }).catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: "Error occured"})
      })
    })

  }
}
