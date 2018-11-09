import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';

export const fetchFriends = () => {
    return dispatch => {
        dispatch({type: FETCHING});
        axios.get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({type: SUCCESS, payload: response.data})
        })
        .catch(response => {
            dispatch({type: FAILURE, payload: response});
        })
    }

}