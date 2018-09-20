import axios from 'axios';

export const ACTIONS = {FRIEND_ADDED: 'FRIEND_ADDED', ADDING_FRIEND: 'ADDING_FRIEND', FETCHED_FRIENDS: 'FETCHED_FRIENDS', FETCHING_FRIENDS: 'FETCHING_FRIENDS'};

export const addFriend = (friend) => dispatch => {
    console.log(friend);
    dispatch({type: ACTIONS.ADDING_FRIEND});
    axios.post('http://localhost:5000/api/friends', {...friend})
    .then(response => {
        dispatch({type: ACTIONS.FRIEND_ADDED, friends: response.data})
    })
    .catch(err => console.log(err.message))
}

export const getFriends = () => dispatch => {
    dispatch({type: ACTIONS.FETCHING_FRIENDS});
     axios.get('http://localhost:5000/api/friends')
     .then(response => {
         dispatch({type: ACTIONS.FETCHED_FRIENDS, friends: response.data})
     })
     .catch(err => console.log(err.message))
}