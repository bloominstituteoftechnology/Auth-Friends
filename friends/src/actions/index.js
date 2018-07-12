// we'll need axios
import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS'
export const UPDATE_FRIEND = 'UPDATE_FRIEND'

export const getFriends = () => {
  const request = axios.get('http://localhost:5000/api/friends')
  return (dispatch) => {
      dispatch({type: FETCHING_FRIENDS})
      request.then(({ data }) => {
        console.log('get data', data)
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
        console.log('post data', data)
        dispatch({
          type: FETCHED_FRIENDS, 
          friends: data.friends
        });
      })
      .catch(err => {
          console.log(err);
      });
    };
}

export const updateFriend = (updateFriend) => {
  const request = axios.put(`http://localhost:5000/api/friends/${updateFriend.id}`, updateFriend)
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({
          type: UPDATE_FRIEND, 
          friends: data
        });
      })
      .catch(err => {
          console.log(err);
      });
    };
}
