
import axios from 'axios';

import {FETCHING, FETCHED, ERROR } from './types';

export const getFriends = () => {
  return function(dispatch){
    setTimeout(() => {
      dispatch({type: FETCHING, payload: "fetching request"});
      axios.get('http://localhost:5000/api/friends').then(res => {
        dispatch({type: FETCHED, payload: {
          friends: res.data,
          status: 'fetched friends'
        }})
      }).catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: "Error occured"})
      })
    })
}
}
