// we'll need axios
import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS'
export const SUBMIT_FRIEND = 'SUBMIT_FRIEND'

export const getFriends = () => {
  const request = axios.get('http://localhost:5000/api/friends')
  return (dispatch) => {
      dispatch({type: FETCHING_FRIENDS})
      request.then(({ data }) => {
        dispatch({
          type: FETCHED_FRIENDS, 
          friends: data
        });
      })
      .catch(err => {
          console.log(err);
      });
    };
}

export const addFriend = (newFriend) => {
  const request = axios.post('http://localhost:5000/api/friends', newFriend)
  return (dispatch) => {
      dispatch({type: FETCHING_FRIENDS})
      request.then(({ data }) => {
        dispatch({
          type: FETCHED_FRIENDS, 
          friends: data
        });
      })
      .catch(err => {
          console.log(err);
      });
    };
}

export const submitFriend = (newFriend) => {
  console.log(newFriend)
  const request = axios.put(`http://localhost:5000/api/friends/${newFriend.id}`, newFriend)
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({
          type: SUBMIT_FRIEND, 
          friends: data
        });
      })
      .catch(err => {
          console.log(err);
      });
    };
}
