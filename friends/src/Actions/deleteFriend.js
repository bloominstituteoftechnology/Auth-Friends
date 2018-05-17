import axios from 'axios';

import { ERROR_FRIENDS } from './actionTypes';
import { fetchFriends } from './fetchFriends';

export const deleteFriend = id => {
    const cya = axios.delete(`http://localhost:5000/api/friends/${id}`);
    return dispatch => {
        cya.then(response => {
            dispatch(fetchFriends());
        })
            .catch(err => {
                dispatch({
                    type: ERROR_FRIENDS,
                    payload: 'Error posting friends...'
                });
            });
    };
}; 