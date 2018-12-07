import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
        .get('http://localhost:5000/api/friends')
        .then( res => {
            console.log('Server Response: ', res)
            dispatch({
                type: SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            console.log('Server Error: ', err)
            dispatch({
                type:FAILURE,
                payload: err
            })
        })
}

export const addNewFriend = friend =>  {
    // dispatch({ type: ADD_NEW_FRIEND })
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then( res => {
            console.log('POST Server Response: ', res)
            // dispatch({
            //     type: SUCCESS,
            //     payload: res.data
            // })
        })
        .catch( err => {
            console.log('POST Server Error: ', err)
            // dispatch({
            //     type:FAILURE,
            //     payload: err
            // })
        })
}