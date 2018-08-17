import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIENDS, FRIENDS_SAVED, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND, FRIEND_DELETED, ERROR} from '../action-types';
import axios from 'axios';


export const getFriends = () => {
  return function(dispatch) {
    dispatch({type: FETCHING_FRIENDS});
    axios.get('http://localhost:5000/api/friends')
    .then(response => {
      console.log(response);
      if (response === undefined) {
        dispatch({ type: ERROR, payload: "Oops! Something went wrong :("})
      } else {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data })
      }
    })
    .catch(error => {
      dispatch({type: ERROR, payload: 'Server Error! Oh no!'})
    });
  }
}

export const saveNewFriend = (friend) => {
  return function(dispatch) {
    dispatch({type: SAVING_FRIENDS, payload: friend});
    axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({type: FRIENDS_SAVED, payload: response.data})
    })
    .catch(error => {
      dispatch({type: ERROR, payload: "Oops! Something went wrong saving your friend :("})
    });
  }
}
