import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetch_friends = () => dispatch => {
    dispatch({ type: FETCH_START });
    console.log('from fetch!')
    axios
        .get('http://localhost:5000')
        .then(response => 
            dispatch({ type: FETCH_SUCCESS, payload: response.data.results })
        )
        .catch(err => 
            dispatch({ type: FETCH_FAILURE, payload: err })
            );
};