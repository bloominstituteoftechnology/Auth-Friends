import axios from 'axios';

// exports
export const FETCHING_FRIENDS_START = 'FETCHING_FRIENDS_START';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const REMOVE_FRIEND_START = 'REMOVE_FRIEND_START';
export const REMOVE_FRIEND_SUCCESS = 'REMOVE_FRIEND_SUCCESS';
export const REMOVE_FRIEND_FAILURE = 'REMOVE_FRIEND_FAILURE';

// Returns a list of friends from the server
export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START });

    axios.get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err });
        });
};

// Returns adding a new friend to the server
export const addNewFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START });

    axios.post('http://localhost:5000/api/friends', friend)
        .then(response => {
            dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
        });
};

export const removeFriend = id => dispatch => {
    dispatch({ type: REMOVE_FRIEND_START });

    return axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            console.log(`REMOVING:`, response.data)
            dispatch({ type: REMOVE_FRIEND_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: REMOVE_FRIEND_FAILURE, payload: err });
        })
}