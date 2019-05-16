import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getFriends = () => {
    console.log(`--------------Fetching getFriends()`)
    dispatch ({ type: FETCHING });
    axios
    .get(`http://localhost:5000/api/friends`)
    .then(res => {
        dispatch({  })
    })
}