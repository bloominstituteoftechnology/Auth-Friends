import axios from 'axios';

// ActionType Exports
export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

// Export Action creators
// These return objects passed into the reducer 

export const fetchData = () => dispatch => {
    dispatch({
        type: START_FETCH
    })

    axios
        .get('http://localhost:5000/api/friends')
        .then(resp => {
            dispatch({type: FETCH_SUCCESS, payload: resp})    
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}