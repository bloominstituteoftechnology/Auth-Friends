import axios from 'axios';
import {ERROR} from '../actionCreators/fetchingFriends';
export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const SAVED_FRIENDS = "SAVED_FRIENDS";

export const createFriends = info => {
  return function(dispatch){
    dispatch({
      type: SAVING_FRIENDS,
    })
    axios
      .post('http://localhost:5000/api/friends', info)
      .then(response => {
        dispatch({
          type: SAVED_FRIENDS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Request failed"
        })
      })
  }
}