
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS';
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND-FAILURE';


export const addNewFriend = friend => dispatch => {
    dispatch({ type: ADDING_FRIEND });
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            console.log(res);
            dispatch({ type: ADDING_FRIEND_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: ADDING_FRIEND_FAILURE, payload: err})
        });
}

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            // console.log(res);
            dispatch({ type: FETCHING_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: FETCHING_FAILURE, payload: err})
        });
}

