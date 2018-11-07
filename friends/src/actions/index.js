import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING });

    axios
    .get('')
    .then(response => {
        dispatch({ type: SUCCESS, friends: response.data }) //TODO: check if this is the correct reponse
    })
    .catch(err => {
        dispatch({ type: FAILURE, message: 'Error fetching the friend data.' })
    })
}