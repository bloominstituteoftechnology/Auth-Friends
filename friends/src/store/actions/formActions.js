import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_START';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_START';

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START })
        axios.post(`${baseUrl}/api/friends`, friend)
            .then(res => console.log(res))
            .catch(err => console.log(err))
}
