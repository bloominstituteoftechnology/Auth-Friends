import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchData = () => {
    const request = axios.get('http://localhost:5000/api/friends');
    return (dispatch) => {
        dispatch({ type: FETCHING });
        request.then(res => {
            dispatch({ type: FETCHED, payload: res.data })
        })
            .catch(err =>
                dispatch({
                    type: ERROR,
                    error: err
                }));
    }
}