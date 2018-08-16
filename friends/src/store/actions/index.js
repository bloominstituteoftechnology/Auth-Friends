import axios from 'axios';

export const LOADING_DATA = 'LOADING_DATA';
export const DATA_LOADED = 'DATA_LOADED';
export const ERROR = 'ERROR';

export const loading_data = () => {
    const endpoint = axios.get('http://localhost:5000/api/friends');
    return (dispatch) => {
        dispatch({ type: LOADING_DATA});

        endpoint.then(({data}) => {
            dispatch({ type: DATA_LOADED, payload: data.results })
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    }
}

