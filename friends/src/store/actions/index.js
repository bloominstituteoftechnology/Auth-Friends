import axios from 'axios';

export const LOADING_DATA = 'LOADING_DATA';
export const DATA_LOADED = 'DATA_LOADED';
export const ERROR = 'ERROR';

export const loading_data = () => {
    // const endpoint = axios.get('http://localhost:5000/api/friends');
    return (dispatch) => {
        dispatch({ type: LOADING_DATA});

        axios
        .get('http://localhost:5000/api/friends')
        .then((response) => {
            dispatch({ type: DATA_LOADED, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        });
    }
}

