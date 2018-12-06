import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

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