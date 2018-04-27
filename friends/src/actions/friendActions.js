import axios from 'axios';

export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';


// avengers model code BELOW

// getFriends = () => {
//   `/api/friends`
// }
export const getFriends = () => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    axios.get('http://localhost:5555/api/friends')
      .then( response => {
        setTimeout( () => {
          dispatch({ type: SUCCESS, payload: response.data})
        }, 1000)
      })
      .catch( err => {
        dispatch({ type: ERROR, error: 'ERROR FETCHING FRIENDS'})
      })
  }
}

// getFriendById = () => {
//   `/api/friends/123`
// }

// postFriend = () => {
//   `/api/friends`
// }
export const createFriend = (friend) => {
  return dispatch => {
    dispatch({ type: PENDING });
    axios.post('http://localhost:5555/api/friends', friend)
      .then( response => {
        setTimeout(() => {
          dispatch(getFriends()); //data: null, status: 200
        }, 1000);
      })
      .catch( () => {
        dispatch({ type: ERROR, error: 'ERROR CREATING FRIEND'})
      })
  }
}
// putFriend = () => {
//   `/api/friends/:id`
// }

// deleteFriend = () => {
//   `/api/friends/123`
// }

// AVENGERS MODEL CODE ABOVE
