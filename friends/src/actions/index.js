import axios from 'axios';

export const FRIENDS_START = 'FRIENDS_START';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

// export const ADD_NEW_FRIEND_START = 'ADD_NEW_FRIEND_START';
// export const ADD_NEW_FRIEND_SUCCESS = 'ADD_NEW_FRIEND_SUCCESS';
// export const ADD_NEW_FRIEND_FAILURE = 'ADD_NEW_FRIEND_FAILURE';



export const fetchFriends = () => dispatch => {
    dispatch({ type: FRIENDS_START })
    axios.get('http://localhost:5000/api/friends')
    .then(res =>dispatch({ type: FRIENDS_SUCCESS, payload: res.data}))
    .catch(err =>dispatch({ type: FRIENDS_FAILURE, payload:err}))
}

// export const addFriend = (friend) => dispatch => {
//     dispatch({ type: ADD_NEW_FRIEND_START })
//     axios.post('http://localhost:5000/api/friends', friend)
//     .then(res =>dispatch({ type: ADD_NEW_FRIEND_SUCCESS, payload: res.data}))
//     .catch(err =>dispatch({ type: ADD_NEW_FRIEND_FAILURE, payload:err}))
// }


