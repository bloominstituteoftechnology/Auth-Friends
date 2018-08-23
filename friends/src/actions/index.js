import axios from 'axios';

export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FECTHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchingFriend = () => {
    return dispatch => {
        dispatch({
            type: FETCH_FRIEND
        })
        axios
            .get('/api/friends/:id')
            .then(reponse => {
                dispatch({
                    type: FETCHED,
                    payload: response.data.results
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'you have no friends'
                })
            })
    };
};