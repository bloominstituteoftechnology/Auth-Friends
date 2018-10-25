import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/range';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchData = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
            .get('http://localhost:5000/api/friends/')
            .then(response => {
                dispatch({ type: SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FAILURE, payload: error })
            });
    }
}

export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const FAILED_ADD = 'FAILED_ADD';

export const addFriend = newFriend => {
    return function(dispatch) {
        dispatch({ type: ADDING });
        axios
            .post('http://localhost:5000/api/friends/', newFriend)
            .then(response => {
                dispatch({ type: ADDED, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FAILED_ADD, payload: error })
            });
    }
}